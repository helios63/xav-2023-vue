<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <h1>Xavi Noguera</h1>
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
  position: sticky;
  top: 4px;
  left: 0;
  width: calc(100% - 8px);
  z-index: 99;

  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: #0d090f13;
  backdrop-filter: blur(35px);

  & h1 {
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
