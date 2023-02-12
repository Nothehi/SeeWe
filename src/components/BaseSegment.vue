<script setup lang="ts">
interface Props {
    title: string
}

defineProps<Props>()
</script>

<template>
    <section class="flex md:flex-row flex-col">
        <aside class="md:w-1/5 md:border-r pt-5">
            <h3 class="font-bold font-montserrat">{{ title }}</h3>
        </aside>

        <article class="md:w-4/5 font-spacemono px-2 md:pt-5">
            <slot />
        </article>
    </section>
</template>