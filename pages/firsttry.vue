<template>
  <div>
    <site-header/>
    <main>
      <div class="m-14 bg-secondary p-6 rounded-tl-3xl rounded-tr-3xl"><p class="bg-white p-2 rounded border-black border w-fit">top bar</p></div>
      <div class="flex flex-col gap-4 w-1/2 m-14">
        <div class="flex flex-col gap-4 mb-10">
          <h1 class="text-3xl font-bold ">Proof of concept</h1>
          <p>A custom button that uses the custom brand color</p>
          <custom-button >primary button</custom-button>
        </div>
        <div class="flex flex-col gap-4 border-2 border-black p-4 rounded-3xl shadow-primaryShadow">
          <h2 class="text-lg font-bold">Default agora color</h2>
          <p>A custom button that uses the default agora color</p>
          <p>It may be useful to have default styles that don't change e.g shadows. All the shadows on this page come from the default agora theme</p>
          <custom-button variant="agora">outline button</custom-button>
        </div>
        <div class="flex flex-col gap-4 border-2 border-black p-4 rounded-3xl shadow-primaryShadow">
          <h2 class="text-lg font-bold">Default tailwind colors</h2>
          <p>Custom buttons that use default tailwind colors</p>
          <div class="flex gap-4">
            <custom-button variant="outline">outline button</custom-button>
            <custom-button variant="circle">Y</custom-button>
            <custom-button variant="square">N</custom-button>
          </div>
        </div>
      </div>
    </main>
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
