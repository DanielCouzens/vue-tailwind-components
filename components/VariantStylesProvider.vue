<template>
  <div :class="['baseVariant', variant]">
    <slot />
    <!-- <slot :variantStyle="['baseVariant', variant]"/> -->
  </div>
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
.baseVariant {
  width: fit-content;
  height: fit-content;
  color: var(--variant-text-color);
  background-color: var(--variant-bg-color);
}
.baseVariant :hover {
  color: var(--variant-text-color);
  background-color: var(--variant-bg-color);
}

.primary {
  --variant-text-color: var(--primary-text-color);
  --variant-bg-color: var(--primary-bg-color);
}

.secondary {
  --variant-text-color: var(--secondary-text-color);
  --variant-bg-color: var(--secondary-bg-color);
}

.warning {
  --variant-text-color: var(--warning-text-color);
  --variant-bg-color: var(--warning-bg-color);
}

.danger {
  --variant-text-color: var(--danger-text-color);
  --variant-bg-color: var(--danger-bg-color);
}
</style>
