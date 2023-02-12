<script setup lang="ts">
interface Props {
    title: string
    from: string
    to?: string
    company: string
    link?: string
    skills: Array<string>
}

defineProps<Props>()
</script>

<template>
    <div class="flex flex-col mb-5">
        <p class="text-lg font-medium underline">{{ title }}</p>
        <span class="text-sm">{{ from }} – {{ to }}</span>
        <p>At <a :href="link" class="font-medium text-blue-900">{{ company }}</a></p>
        <span class="text-xs">🛠️ {{ skills?.map(skill => '#' + skill).join(', ') }}</span>
    </div>
</template>
