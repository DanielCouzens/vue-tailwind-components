<template>
    <div class="container">
        <slot/>
    </div>
</template>

<script setup>

</script>

<style scoped>
.container :slotted(h2) {
    font-size: 10rem;
    color: rgb(243, 76, 76);
}

</style>