<template>
  <div id="smooth-wrapper">
    <div id="smooth-content">
      <section>
        <img loading="lazy" src="../assets/pics/Witch01.png" alt="Witch 1" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Witch02.jpg" alt="Witch 2" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Witch03.jpg" alt="Witch 3" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Witch04.jpg" alt="Witch 4" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Beast.jpg" alt="Beast" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Werewolf.jpg" alt="Werewolf" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Warrior01.png" alt="Warrior 1" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Warrior02.png" alt="Warrior 2" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Warrior03.png" alt="Warrior 3" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Teela01.png" alt="Teela 1" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Teela02.png" alt="Teela 2" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Aladdin.jpg" alt="Aladdin" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Joe.jpg" alt="Joe" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Lordmacintosh.jpg" alt="Lordmacintosh" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Bennevine01.png" alt="Bennevine 1" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Bennevine02.png" alt="Bennevine 2" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Bennevine03.png" alt="Bennevine 3" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Bennevine04.png" alt="Bennevine 4" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Bennevine05.png" alt="Bennevine 5" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Bennevine06.png" alt="Bennevine 6" />
      </section>

      <section>
        <img loading="lazy" src="../assets/pics/Bennevine07.png" alt="Bennevine 7" />
      </section>
    </div>
  </div>
</template>

<script>
import { animate, inView } from 'motion'

// import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default {
  mounted() {
    animate('header', { y: -100, opacity: 0 })
    animate('section', { opacity: 0, y: 50 })
    animate('.intro', { opacity: 0 })

    animate('header', { y: 0, opacity: 1 }, { duration: 2, delay: 1 })
    animate('.intro', { opacity: [0, 1] }, { duration: 2, delay: 1 })

    inView('section', ({ target }) => {
      animate(target, { opacity: 1, y: 0 }, { duration: 0.5, delay: 0.5 })
    })

    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      smoothTouch: 0.1
    })

    var images = document.querySelectorAll('img')

    images.forEach((element) => {
      if (element.complete) {
        element.classList.add('loaded')
      } else {
        element.onload = function () {
          element.classList.add('loaded')
        }
      }
    })
  }
}
</script>

<style lang="scss" scoped>
#smooth-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 8px;
  padding: 40px 8px 8px;

  @media (min-width: 1024px) {
    padding: 8px;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    background-color: rgb(18, 17, 17);

    img {
      width: 100%;
      height: auto;
      padding: 0;
      opacity: 0;
      transition: opacity 300ms ease;

      &.loaded {
        opacity: 1;
      }
    }

    @media (min-width: 1024px) {
      width: calc(3 / 4 * 100%);
    }

    // @media (min-width: 767px) {
    // }
  }
}
</style>
