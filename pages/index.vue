<template>
    <main class="container w-full mx-auto md:px-32 px-4 py-8">
        <header class="pb-2 font-montserrat">
            <h1 class="text-5xl font-medium">Hossein Nodehi 👋</h1>
            <h6 class="">Backend Developer</h6>
        </header>

        <!-- Social -->
        <section class="border-y space-x-2 divide-x py-2 text-xs text-gray-500 font-spacemono">
            <a href="mailto: nodehi.work@gmail.com">Email</a>
            <a class="pl-2" href="https://github.com/nothehi" target="_blank">Github</a>
            <a class="pl-2" href="https://twitter.com/nothehi" target="_blank">Twitter</a>
            <a class="pl-2" href="https://stackoverflow.com/users/10770469/nothehi" target="_blank">StackOverflow</a>
            <a class="pl-2" href="https://www.linkedin.com/in/hossein-nodehi-9184b81ba" target="_blank">LinkedIn</a>
        </section>

        <!-- Skill Summary -->
        <TheSegment title="Skill Summary">
            <ul>
                <li>🔹 PHP debugging and error tracking</li>
                <li>🔹 JavaScript debugging and error tracking</li>
                <li>🔹 Laravel debugging and error tracking</li>
                <li>🔹 Laravel package development</li>
                <li>🔹 Database analysis & design</li>
            </ul>
        </TheSegment>

        <!-- Jobs -->
        <TheSegment title="Jobs">
            <TheJob v-for="job in jobs" v-bind="job" />
        </TheSegment>

        <!-- Main Technical Summary -->
        <TheSegment title="Main Technical Summary">
            <ul>
                <li v-for="skill in skills">🔸 {{ skill.join(', ') }}</li>
            </ul>
        </TheSegment>

        <!-- Academic Degrees -->
        <TheSegment title="Academic Degrees">
            <ul>
                <li class="flex flex-col mb-5" v-for="degree in degrees">
                    <p class="font-medium">{{ degree.finished ? '🎓' : '' }} {{ degree.grade }} Degree in {{
                            degree.field
                    }}</p>
                    <span class="text-sm">📅 {{ degree.from }} – {{ degree.to }}</span>
                    <span>🏫 {{ degree.university }}</span>
                </li>
            </ul>
        </TheSegment>

        <!-- Personality -->
        <TheSegment title="Personality">
            <ul>
                <li>- Team working</li>
                <li>- Flexibility</li>
                <li>- Creative</li>
                <li>- Problem Solving</li>
                <li>- Geek and interested in learning new things</li>
            </ul>
        </TheSegment>

        <footer class="pt-2 border-t">
            <p class="text-center"><span class="transform rotate-180 inline-block">&copy;</span> Copyleft 2022
            </p>
        </footer>
    </main>
</template>

<script setup>
const jobs = [
    {
        title: "Backend Developer (Contract)",
        from: "April 2022",
        company: "Part Software Group",
        link: "https://www.partsoftware.com/",
        skills: ['Laravel', 'Vuejs', 'PostgreSQL', 'TDD'],
    },
    {
        title: "Backend Developer (Contract)",
        from: "February 2020",
        to: "January 2021",
        company: "Hamta Payment",
        link: "https://www.hamtapay.net/",
        skills: ['Laravel', 'Lumen', 'Nodejs', 'Vuejs', 'MySQL', 'Redis', 'Microservice'],
    },
    {
        title: "Backend Developer (Contract)",
        from: "March 2019",
        to: "September 2019",
        company: "32 Negin",
        link: "http://32negin.com/",
        skills: ['Laravel', 'MySQL', 'Microservice'],
    },
    {
        title: "Web Developer (PartTime)",
        from: "December 2018",
        to: "March 2019",
        company: "Propagation Office",
        skills: ['PHP', 'Laravel', 'MySQL', 'Wordpress'],
    },
    {
        title: "PHP Developer (PartTime)",
        from: "September 2018",
        to: "December 2018",
        company: "Smart Business",
        link: "https://faraket.com/",
        skills: ['PHP', 'PrestaShop', 'MySQL'],
    },
    {
        title: "PHP Developer (PartTime)",
        from: "June 2018",
        to: "October 2018",
        company: "Faraket",
        skills: ['PHP', 'Wordpress', 'MySQL'],
    }
]

const skills = [
    ['HTML', 'CSS', 'JavaScript', 'PHP'],
    ['MySQL', 'MariaDB', 'phpMyAdmin', 'PostgreSQL'],
    ['Git', 'GitLab', 'GitHub'],
    ['OOP', 'SOLID', 'Design Pattern', 'MVC', 'Clean Code', 'TDD'],
    ['Laravel', 'Lumen', 'Composer'],
    ['Vuejs', 'Tailwind', 'Npm', 'Nuxt'],
    ['Agile', 'Scrum'],
]

const degrees = [
    {
        grade: "Bachelor",
        field: "Software Engineering",
        from: "September 2020",
        to: "now",
        university: "Montazeri Technical College of Mashhad",
        finished: false,
    },
    {
        grade: "Associate",
        field: "Software Engineering",
        from: "September 2017",
        to: "June 2019",
        university: "Montazeri Technical College of Mashhad",
        finished: true,
    },
]
</script>