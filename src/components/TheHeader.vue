<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="head">
      <h1>Xavi Noguera</h1>
      <h2>3D Character Artist</h2>
    </div>
    <nav>
      <!-- <RouterLink to="/">Projects</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->
      <!-- <RouterLink to="/contact">Contact</RouterLink> -->
      <a href="mailto:xavinosuke@gmail.com">Contact</a>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 99;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: baseline;
  padding: 8px 16px;

  @media (min-width: 1024px) {
    width: calc(1 / 4 * 100%);
    padding: 8px;
  }

  h1,
  h2 {
    font-size: 12px;
    text-transform: uppercase;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }

  nav {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    gap: 1rem;

    & a {
      font-size: 12px;
      text-transform: uppercase;

      @media (min-width: 1024px) {
        font-size: 16px;
      }
    }
  }
}
</style>
