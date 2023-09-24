import {
  DirectionalLight,
  Clock,
  AmbientLight,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Group
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js'
import { NoiseShader } from './noise-shader'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

const introTag = document.querySelector('div.intro')

let currentEffect = 0
let aimEffect = 0

const clock = new Clock()

const scene = new Scene()
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setClearColor(0x000000, 0)
introTag.appendChild(renderer.domElement)

// LIGHT
const ambience = new AmbientLight(0x404040)
camera.add(ambience)

const keyLight = new DirectionalLight(0xfff0ff, 0.8)
keyLight.position.set(-1, 1, 3)
camera.add(keyLight)

const fillLight = new DirectionalLight(0xffffff, 0.3)
camera.add(fillLight)

scene.add(camera)

// OBJECT IMPORT
const gtlfLoader = new GLTFLoader()

const loadGroup = new Group()
loadGroup.position.y = -10

const scrollGroup = new Group()
scrollGroup.add(loadGroup)

scene.add(scrollGroup)

gtlfLoader.load('logoxn.glb', (gtlf) => {
  loadGroup.add(gtlf.scene)
})

// CONTROLS

const controls = new OrbitControls(camera, renderer.domElement)
controls.enableZoom = false
controls.enablePan = false
controls.autoRotate = true
controls.autoRotateSpeed = 3
controls.update()

camera.position.z = -400

// POST PROCESSING

const composer = new EffectComposer(renderer)

const renderPass = new RenderPass(scene, camera)
composer.addPass(renderPass)

const noisePass = new ShaderPass(NoiseShader)
noisePass.uniforms.time.value = clock.getElapsedTime()
noisePass.uniforms.effect.value = currentEffect
noisePass.uniforms.aspectRatio.value = window.innerWidth / window.innerHeight

composer.addPass(noisePass)

const outputPass = new OutputPass()
composer.addPass(outputPass)

const render = () => {
  controls.update()

  scrollGroup.rotation.set(0, window.scrollY * 0.005, 0)

  currentEffect += (aimEffect - currentEffect) * 0.05

  noisePass.uniforms.time.value = clock.getElapsedTime()
  noisePass.uniforms.effect.value = currentEffect

  requestAnimationFrame(render)

  composer.render()
}

const resize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()

  noisePass.uniforms.aspectRatio.value = window.innerWidth / window.innerHeight

  renderer.setSize(window.innerWidth, window.innerHeight)
}

const scroll = () => {
  // clearTimeout(timeoutEffect)
  // aimEffect = 1
  // timeoutEffect = setTimeout(() => {
  //   aimEffect = 0
  // }, 500)

  scrollGroup.rotation.set(0, window.scrollY * 0.005, 0)
}

render()
window.addEventListener('resize', resize)
window.addEventListener('scroll', scroll)
