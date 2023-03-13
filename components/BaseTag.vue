<template>
  <variant-styles-provider :variant="variant" :tag="tag">
    <div  :class="['baseTag']">
      <slot />
    </div>
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
</style>
