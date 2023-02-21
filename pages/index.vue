<template>
  <div>
    <header class="bg-primary p-14 border-b-8 border-secondary flex justify-between items-center">
      <div class="bg-white p-4 rounded border border-black">
        Header
      </div>
      <custom-button variant="secondary">secondary button</custom-button></header>
      <div class="m-14 bg-secondary p-6 rounded-tl-3xl rounded-tr-3xl"><p class="bg-white p-2 rounded border-black border w-fit shadow-agora">top bar</p></div>
      <div class="flex flex-col gap-4 w-1/2 m-14">
        <h1 class="text-3xl font-bold ">Proof of concept</h1>
        <p>A custom button that uses the custom brand color</p>
        <custom-button >primary button</custom-button>
        
        <h2 class="text-lg font-bold">Default agora color</h2>
        <p>A custom button that uses the default agora color</p>
        <p>It may be useful to have default styles that don't change e.g shadows. All the shadows on this page come from the default agora theme</p>
        <custom-button variant="agora">outline button</custom-button>
        
        <h2 class="text-lg font-bold">Default tailwind colors</h2>
        <p>Custom buttons that use default tailwind colors</p>
        <custom-button variant="outline">outline button</custom-button>
        <custom-button variant="circle">Y</custom-button>
        <custom-button variant="square">N</custom-button>
      </div>
    </div>
  </template>

<script>
export default {
  setup() {
    return {}
  },
}
</script>

<style scoped></style>
