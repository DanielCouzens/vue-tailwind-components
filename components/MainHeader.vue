<template>
    <header class="header">
        <div >
            <h1>Header</h1>
            <h2>Sub heading</h2>
        </div>
        <nav>
            <ul class="nav">
                <nuxt-link to="/">index</nuxt-link>
                <nuxt-link to="/page-two">page Two</nuxt-link>
            </ul>
        </nav>
    </header>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    theme: {
        type: Object,
        required: true,
    },
})

</script>

<style scoped>
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: v-bind('theme.bgPrimary');
    padding: 2rem 4rem;
    text-align: center;
    border-bottom: 1rem solid v-bind('theme.bgSecondary');
}

h1 {
    color: v-bind('theme.txtPrimary');
}

h2 {
    color: v-bind('theme.txtSecondary');
}

.nav {
    display: flex;
    padding: 1rem;
    gap: 1rem;
}

a {
    padding: 0.5rem;
    border-radius: 0.4rem;
    color: v-bind('theme.txtTersery');
    background-color: v-bind('theme.bgTersery');
}

</style>