<script setup></script>

<template>
  <div class="intro">
    <!-- THree.js -->
  </div>

  <main>
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Witch01.png" alt="Witch 1" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Witch02.jpg" alt="Witch 2" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Witch03.jpg" alt="Witch 3" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Witch04.jpg" alt="Witch 4" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Beast.jpg" alt="Beast" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Werewolf.jpg" alt="Werewolf" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Warrior01.png" alt="Warrior 1" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Warrior02.png" alt="Warrior 2" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Warrior03.png" alt="Warrior 3" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Teela01.png" alt="Teela 1" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Teela02.png" alt="Teela 2" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Aladdin.jpg" alt="Aladdin" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Joe.jpg" alt="Joe" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Lordmacintosh.jpg" alt="Lordmacintosh" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Bennevine01.png" alt="Bennevine 1" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Bennevine02.png" alt="Bennevine 2" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Bennevine03.png" alt="Bennevine 3" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Bennevine04.png" alt="Bennevine 4" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Bennevine05.png" alt="Bennevine 5" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Bennevine06.png" alt="Bennevine 6" />
        </section>

        <section data-speed="clamp(0, 0.5, 1)">
          <img src="../assets/pics/Bennevine07.png" alt="Bennevine 7" />
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

import { ref, onMounted } from 'vue'
import { animate, inView } from 'motion'
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
import { NoiseShader } from '../assets/js/noise-shader'
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export default {
  mounted() {
    // Code to run when the component is mounted (similar to the "mounted" lifecycle hook)
    this.setupThree()
    this.setupAnimations()
    this.setupScrollSmoother()
  },
  methods: {
    setupAnimations() {
      animate('header', { y: -100, opacity: 0 })
      animate('section', { opacity: 0, y: 50 })
      animate('.intro', { opacity: 0 })

      animate('header', { y: 0, opacity: 1 }, { duration: 2, delay: 1 })
      animate('.intro', { opacity: [0, 1] }, { duration: 2, delay: 1 })

      inView('section', ({ target }) => {
        animate(target, { opacity: 1, y: 0 }, { duration: 0.8, delay: 0.5 })
      })
    },
    setupThree() {
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
        scrollGroup.rotation.set(0, window.scrollY * 0.005, 0)
      }

      render()
      window.addEventListener('resize', resize)
      window.addEventListener('scroll', scroll)
    },
    setupScrollSmoother() {
      ScrollSmoother.create({
        smooth: 1,
        effects: true
      })
    }
  }
}
</script>

<style scoped>

main {
  max-width: 1180px;
  margin: 0 auto;
}
div.intro {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

#smooth-content {
  margin-top: 150vh;
}

section {
  padding: 0 1rem;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 1rem;

  @media (min-width: 767px) {
    margin: 6rem 0;
  }

  &:nth-of-type(even){
    justify-content: flex-end;
  }

  & img {
    width: 100%;
    height: auto;
    padding: 0;

    @media (min-width: 1024px) {
      width: 66%;
      padding: 0 4rem;
    }

    @media (min-width: 767px) {
      padding: 0 2rem;
    }
  }

  /* & .text {
    padding: 1rem;
  } */
}
</style>
