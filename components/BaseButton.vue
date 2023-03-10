<template>
  <variant-styles-provider :variant="variant">
      <button :class="['baseButton']">
        <slot />
      </button>
  </variant-styles-provider>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  variant: {
    type: String,
    validators: (value) =>
      ['primary', 'secondary', 'warning', 'danger'].includes(value),
  },
})
</script>

<style scoped>
.baseButton {
  border: none;
  padding: 0.6rem 1rem;
  width: fit-content;
  height: fit-content;
}
</style>
