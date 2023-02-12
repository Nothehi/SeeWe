<script setup lang="ts">
import BaseSegment from '@/components/BaseSegment.vue'
import BaseJob from '@/components/BaseJob.vue'

import { useMy } from '@/stores/my'

const my = useMy()
</script>

<template>
    <div>
        <BaseSegment title="Skill Summary">
            <ul>
                <li>🔹 PHP debugging and error tracking</li>
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
                <ul>
                    <li v-for="(degree, idx) in my.degrees" :key="idx" class="flex flex-col mb-5">
                        <p v-if="degree.finished" class="font-medium">{{ degree.grade }}</p>
                        <p v-else class="font-medium">🎓 {{ degree.grade }}</p>
                        <span class="text-sm">📅 {{ degree.from }} – {{ degree.to }}</span>
                        <span>🏫 {{ degree.university }}</span>
                    </li>
                </ul>
            </ul>
        </BaseSegment>

        <BaseSegment title="Personality">
            <ul>
                <li>- Team working</li>
                <li>- Flexibility</li>
                <li>- Creative</li>
                <li>- Problem Solving</li>
                <li>- Geek and interested in learning new things</li>
            </ul>
        </BaseSegment>
    </div>
</template>
