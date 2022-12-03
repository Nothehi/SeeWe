<template>
    <div class="flex flex-col mb-5">
        <p class="text-lg font-medium underline">{{ title }}</p>
        <span class="text-sm">{{ from }} – {{ to }}</span>
        <p>At <a :href="link" class="font-medium text-blue-900">{{ company }}</a></p>
        <span class="text-xs">🛠️ {{ getSkills }}</span>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        requery: true,
    },
    from: {
        type: String,
        requery: true,
    },
    to: {
        type: String,
        requery: false,
        default: "now"
    },
    company: {
        type: String,
        requery: true,
    },
    link: {
        type: String,
        requery: false,
        default: "#"
    },
    skills: {
        type: Array,
        requery: true,
    },
})

const getSkills = computed(() => props.skills.map(skill => '#' + skill).join(', '))
</script>