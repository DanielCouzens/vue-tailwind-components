<template>
  <div class="w-4/5 grid gap-2">
    <label :for="nameId" class="capitalize">
      {{ labelName }}
    </label>
    <input
      :class="inputClass"
      type="text"
      :name="nameId"
      :id="nameId"
      placeholder="enter a hexcode"
      :value="modelValue"
      @input="(event) => $emit('update:modelValue', event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'


const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
  },
  nameId: {
    type: String,
    default: 'primary',
  },
  modelValue: {
    type: String,
    default: '',
  },
})

const labelName = computed(() => {
    return props.nameId.replaceAll('-', ' ')
})

const defaultStyles = 'font-bold py-2 px-4 rounded shadow-primaryShadow'

const inputClass = computed(() => {
  switch (props.variant) {
    case 'agora':
      return `bg-agora hover:bg-agora/75 text-white ${defaultStyles} w-fit`
    case 'outline':
      return `border border-black rounded w-full p-2`
    default:
      return ''
  }
})
</script>
