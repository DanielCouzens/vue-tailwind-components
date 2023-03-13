<template>
  <div>
    <main-header :theme="styles" />
    <main class="main">
      <div class="container">
        <base-button variant="primary">Primary</base-button>
        <base-button variant="secondary">Secondary</base-button>
        <base-button variant="warning">Warning</base-button>
        <base-button variant="danger">Danger</base-button>
      </div>
       <!-- <div class="container">
      <base-tag variant="primary">Primary</base-tag>
      <base-tag variant="secondary">Secondary</base-tag>
      <base-tag variant="warning">Warning</base-tag>
      <base-tag variant="danger">Danger</base-tag>
    </div> -->
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const styles = computed(() => {
  return JSON.parse(localStorage.getItem('localStorageStyles')) || {}
})

</script>

<style scoped>
.main {
  padding: 10rem;
  display: flex;
  justify-content: center;
}

.container {
  width: 300px;
  margin: 2rem auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
}
</style>
