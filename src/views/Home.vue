<script setup lang="ts">
import BaseSegment from '@/components/BaseSegment.vue'
import BaseJob from '@/components/BaseJob.vue'

import { useMy } from '@/stores/my'

const my = useMy()
</script>

<template>
    <main class="container w-full px-4 py-8 mx-auto md:px-32">
        <header class="pb-2 font-montserrat">
            <h1 class="text-5xl font-medium">Hossein Nodehi 👋</h1>
            <h6 class="">Backend Developer</h6>
        </header>

        <navbar class="block py-2 space-x-2 text-xs text-gray-500 divide-x border-y font-spacemono">
            <a href="mailto: nodehi.work@gmail.com">Email</a>
            <a class="pl-2" href="https://github.com/nothehi" target="_blank">Github</a>
            <a class="pl-2" href="https://stackoverflow.com/users/10770469/nothehi" target="_blank">StackOverflow</a>
            <a class="pl-2" href="https://www.linkedin.com/in/hossein-nodehi-9184b81ba" target="_blank">LinkedIn</a>
        </navbar>

        <BaseSegment title="Skill Summary">
            <ul>
                <li>🔹 PHP debugging and error tracking</li>
                <li>🔹 GoLang debugging and error tracking</li>
                <li>🔹 JavaScript debugging and error tracking</li>
                <li>🔹 Laravel debugging and error tracking</li>
                <li>🔹 Laravel package development</li>
                <li>🔹 Database analysis & design</li>
            </ul>
        </BaseSegment>

        <BaseSegment title="Jobs">
            <BaseJob v-for="(job, idx) in my.jobs" :key="idx" v-bind="job" />
        </BaseSegment>

        <BaseSegment title="Main Technical Summary">
            <ul>
                <li v-for="(skill, idx) in my.skills" :key="idx">🔸 {{ skill.join(', ') }}</li>
            </ul>
        </BaseSegment>

        <BaseSegment title="Academic Degrees">
            <ul>
                <li v-for="(degree, idx) in my.degrees" :key="idx" class="flex flex-col mb-5">
                    <p v-if="degree.graduated" class="font-medium">🎓 {{ degree.grade }}</p>
                    <p v-else class="font-medium">{{ degree.grade }}</p>
                    <span class="text-sm">📅 {{ degree.from }} – {{ degree.to }}</span>
                    <span>🏫 {{ degree.university }}</span>
                </li>
            </ul>
        </BaseSegment>

        <footer class="pt-2 border-t">
            <p class="flex items-center justify-center space-x-1">
                <span class="inline-block transform rotate-180">&copy;</span>
                <a href="https://en.wikipedia.org/wiki/Copyleft">Copyleft</a>
                <span>2024</span>
            </p>
        </footer>
    </main>
</template>
