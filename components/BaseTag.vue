<template>
  <variant-styles :variant="variant">
    <div>
      <slot />
    </div>
  </variant-styles>
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
.baseTag {
  border: none;
  border-radius: 1.5rem;
  padding: 0.3rem 0.8rem;
}
</style>
