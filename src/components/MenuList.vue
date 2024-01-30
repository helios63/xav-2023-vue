<template>
  <div class="menuList">
    <h3>{{ title }}</h3>
    <ul>
      <li @click="scrollToBehavior('#witch-1')">1</li>
      <li @click="scrollToBehavior('#witch-2')">2</li>
      <li @click="scrollToBehavior('#witch-3')">3</li>
      <li @click="scrollToBehavior('#witch-4')">4</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    scrollToBehavior(hash) {
      console.log(hash)
      window.scrollTo(hash, true, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 6px;

  li {
    list-style: none;
    padding: 0 3px;
    border-radius: 50%;
    border: 1px solid var(--color-text);
    width: 1.5rem;
    height: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      background-color: var(--color-text);
      color: var(--color-background);
    }
  }
}
</style>
