<template>
  <button 
  type="button" 
  :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script setup>

import { defineProps, computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  }
})

const defaultStyles = 'font-bold py-2 px-4 rounded shadow-primaryShadow'

const buttonClass = computed(() => {
  switch (props.variant) {
    case 'agora':
      return `bg-agora hover:bg-agora/75 text-white ${defaultStyles} w-fit`
    case 'primary':
      return `bg-secondary hover:bg-secondary/75 text-white ${defaultStyles} w-fit`
    case 'secondary':
      return `bg-primaryAccent hover:bg-primaryAccent/75 text-white ${defaultStyles} w-fit`
    case 'outline':
      return `bg-white hover:bg-white text-black ${defaultStyles} w-fit border-black border-2`
    case 'circle':
      return `bg-blue-500 hover:bg-blue-700 h-12 w-12 ${defaultStyles} rounded-full`
    case 'square':
      return `bg-orange-500 hover:bg-blue-700 h-12 w-12 text-white ${defaultStyles}`
    default:
      return ''
  }})

</script>
