<template>
  <main-header :theme="state" />
  <main>
    <div class="container">
      <div class="p-one">
        <h2>P</h2>
      </div>
      <div class="p-two">
        <h2>S</h2>
      </div>
      <div class="p-three">
        <h2>T</h2>
      </div>
    </div>
    <!-- <div class="container">
      <base-tag variant="primary">Primary</base-tag>
      <base-tag variant="secondary">Secondary</base-tag>
      <base-tag variant="warning">Warning</base-tag>
      <base-tag variant="danger">Danger</base-tag>
    </div> -->
    <form action="" class="form">
      <div class="form-container">
      <div class="wrap">
        <label for="primary">Primary</label>
        <input
          id="primary"
          class="input"
          type="text"
          v-model="state.bgPrimary"
        />
      </div>
      <div class="wrap">
        <label for="secondary">Secondary</label>
        <input
          id="secondary"
          class="input"
          type="text"
          v-model="state.bgSecondary"
        />
      </div>
      <div class="wrap">
        <label for="tersery">Tersery</label>
        <input
          id="tersery"
          class="input"
          type="text"
          v-model="state.bgTersery"
        />
      </div>
      <div class="wrap">
        <label for="primary_txt">Primary Text</label>
        <input
          id="primary_txt"
          class="input"
          type="text"
          v-model="state.txtPrimary"
        />
      </div>
      <div class="wrap">
        <label for="secondary_text">Secondary Text</label>
        <input
          id="secondary_text"
          class="input"
          type="text"
          v-model="state.txtSecondary"
        />
      </div>
      <div class="wrap">
        <label for="tersery_text">Tersery Text</label>
        <input
          id="tersery_text"
          class="input"
          type="text"
          v-model="state.txtTersery"
        />
      </div>

      </div>
      <div>

        <base-button variant="danger" @click="updateStyles">Submit</base-button>
      </div>
    </form>
  </main>
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

const updateStyles = (e) => {
  e.preventDefault()
  localStorage.setItem('localStorageStyles', JSON.stringify(state))
}
</script>

<style scoped>
.p-one, .p-two, .p-three {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  border-radius: 0.4rem;
  border: 1px solid var(--input-border-color);
}
.p-one h2 {
  color: v-bind('state.txtPrimary');
}
.p-two h2 {
  color: v-bind('state.txtSecondary');
}
.p-three h2 {
  color: v-bind('state.txtTersery');
}
.p-one {
  background-color: v-bind('state.bgPrimary');
  color: v-bind('state.bgPrimary');
}
.p-two {
  background-color: v-bind('state.bgSecondary');
  color: v-bind('state.bgSecondary');
}
.p-three {
  background-color: v-bind('state.bgTersery');
  color: v-bind('state.bgTersery');
}
.container {
  width: 300px;
  margin: 2rem auto;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
}
.wrap {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--input-border-color);
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  justify-content: space-between;
  align-items: center;
  margin: 2rem;
}
.form-container {
  display: flex;
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
}
.input {
  border: 1px solid var(--input-border-color);
  padding: 0.6rem 1rem;
  border-radius: 0.4rem;
  width: 100%;
}
</style>
