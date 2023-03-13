<template>
  <div>
    <main-header :theme="state" />
    <main class="main">
      <div class="container">
        <base-button variant="primary">Primary</base-button>
        <base-button variant="secondary">Secondary</base-button>
        <base-button variant="warning">Warning</base-button>
        <base-button variant="danger">Danger</base-button>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'

const state = reactive({
  bgPrimary: '',
  bgSecondary: '',
  bgTersery: '',
  txtPrimary: '',
  txtSecondary: '',
  txtTersery: '',
})

onMounted(() => {
  const styles = JSON.parse(localStorage.getItem('localStorageStyles'))
  if (styles) {
    state.bgPrimary = styles.bgPrimary
    state.bgSecondary = styles.bgSecondary
    state.bgTersery = styles.bgTersery
    state.txtPrimary = styles.txtPrimary
    state.txtSecondary = styles.txtSecondary
    state.txtTersery = styles.txtTersery
  }
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
