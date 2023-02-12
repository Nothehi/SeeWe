<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <main class="container w-full mx-auto md:px-32 px-4 py-8">
        <header class="pb-2 font-montserrat">
            <h1 class="text-5xl font-medium">Hossein Nodehi 👋</h1>
            <h6 class="">Backend Developer</h6>
        </header>

        <section class="border-y space-x-2 divide-x py-2 text-xs text-gray-500 font-spacemono">
            <a href="mailto: nodehi.work@gmail.com">Email</a>
            <a class="pl-2" href="https://github.com/nothehi" target="_blank">Github</a>
            <a class="pl-2" href="https://twitter.com/nothehi" target="_blank">Twitter</a>
            <a class="pl-2" href="https://stackoverflow.com/users/10770469/nothehi" target="_blank">StackOverflow</a>
            <a class="pl-2" href="https://www.linkedin.com/in/hossein-nodehi-9184b81ba" target="_blank">LinkedIn</a>
        </section>

        <RouterView />

        <footer class="pt-2 border-t">
            <p class="flex items-center justify-center space-x-1">
                <span class="transform rotate-180 inline-block">&copy;</span>
                <a href="https://en.wikipedia.org/wiki/Copyleft">Copyleft</a>
                <span>2023</span>
            </p>
        </footer>
    </main>
</template>
