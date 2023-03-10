<template>
  <div
    :class="classes"
    class="flex flex-col items-center m-14 p-8 border-black border rounded-2xl shadow-2xl w-80 gap-4"
  >
    <h1 class="text-lg">Customise your theme</h1>
    <form action="" class="flex flex-col justify-center items-center gap-4">
      <custom-input
        variant="outline"
        nameId="primary-colour"
        v-model="theme.primaryColour"
      />
      <custom-input variant="outline" nameId="secondary-colour" 
      v-model="theme.secondaryColour"
      />
      <custom-input variant="outline" nameId="secondary-accent-colour" 
      v-model="theme.secondaryAccentColour"
      />
      <custom-button variant="secondary" @click.prevent="submit"> Submit </custom-button>
    </form>
    <div>
      <p>{{ theme.primaryColour }}</p>
      <p>{{ theme.primaryAccentColour }}</p>
      <p>{{ theme.secondaryColour }}</p>
      <p>{{ theme.secondaryAccentColour }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const theme = ref({
  primaryColour: '#000000',
  primaryAccentColour: '#000000',
  secondaryColour: '#000000',
  secondaryAccentColour: '#000000',
})

const dynamic = ref(true)


const submit = () => {
  dynamic.value = !dynamic.value
  console.log('theme',theme.value)
}

</script>

<style lang="scss" scoped></style>
