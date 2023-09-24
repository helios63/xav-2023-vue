<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div class="space"></div>

  <div class="intro">
    <!-- THree.js -->
  </div>

  <main>
    <section>
      <img src="../assets/pics/Witch01.png" alt="Witch 1" />
    </section>

    <section>
      <img src="../assets/pics/Witch02.jpg" alt="Witch 2" />
    </section>

    <section>
      <img src="../assets/pics/Witch03.jpg" alt="Witch 3" />
    </section>

    <section>
      <img src="../assets/pics/Witch04.jpg" alt="Witch 4" />
    </section>

    <section>
      <img src="../assets/pics/Beast.jpg" alt="Beast" />
    </section>

    <section>
      <img src="../assets/pics/Werewolf.jpg" alt="Werewolf" />
    </section>

    <section>
      <img src="../assets/pics/Warrior01.png" alt="Warrior 1" />
    </section>

    <section>
      <img src="../assets/pics/Warrior02.png" alt="Warrior 2" />
    </section>

    <section>
      <img src="../assets/pics/Warrior03.png" alt="Warrior 3" />
    </section>

    <section>
      <img src="../assets/pics/Teela01.png" alt="Teela 1" />
    </section>

    <section>
      <img src="../assets/pics/Teela02.png" alt="Teela 2" />
    </section>

    <section>
      <img src="../assets/pics/Aladdin.jpg" alt="Aladdin" />
    </section>

    <section>
      <img src="../assets/pics/Joe.jpg" alt="Joe" />
    </section>

    <section>
      <img src="../assets/pics/Lordmacintosh.jpg" alt="Lordmacintosh" />
    </section>

    <section>
      <img src="../assets/pics/Bennevine01.png" alt="Bennevine 1" />
    </section>

    <section>
      <img src="../assets/pics/Bennevine02.png" alt="Bennevine 2" />
    </section>

    <section>
      <img src="../assets/pics/Bennevine03.png" alt="Bennevine 3" />
    </section>

    <section>
      <img src="../assets/pics/Bennevine04.png" alt="Bennevine 4" />
    </section>

    <section>
      <img src="../assets/pics/Bennevine05.png" alt="Bennevine 5" />
    </section>

    <section>
      <img src="../assets/pics/Bennevine06.png" alt="Bennevine 6" />
    </section>

    <section>
      <img src="../assets/pics/Bennevine07.png" alt="Bennevine 7" />
    </section>
  </main>
</template>

<style scoped>
.space {
  width: 100%;
  min-height: 100vh;
}

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

section {
  padding: 0 1rem;
  margin: 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 767px) {
    margin: 6rem 0;
  }

  & img {
    width: 100%;
    height: auto;
    padding: 0;

    @media (min-width: 1024px) {
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
