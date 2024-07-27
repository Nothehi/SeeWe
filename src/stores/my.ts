import { defineStore } from 'pinia'
import { reactive } from 'vue'

interface Job {
    title: string,
    from: string,
    to?: string,
    company: string,
    link?: string,
    skills: Array<string>
}

interface Degree {
    grade: string,
    field: string,
    from: string,
    to: string,
    university: string,
    graduated: boolean
}

export const useMy = defineStore('my', () => {
    const jobs: Array<Job> = reactive([
        {
            title: 'Backend Developer (Contract)',
            from: 'April 2022',
            company: 'Part Software Group',
            link: 'https://www.partsoftware.com/',
            skills: ['Laravel', 'Vuejs', 'PostgreSQL', 'TDD']
        },
        {
            title: 'Backend Developer (Contract)',
            from: 'February 2020',
            to: 'January 2021',
            company: 'Hamta Payment',
            link: 'https://www.hamtapay.net/',
            skills: ['Laravel', 'Lumen', 'Nodejs', 'Vuejs', 'MySQL', 'Redis', 'Microservice']
        },
        {
            title: 'Backend Developer (Contract)',
            from: 'March 2019',
            to: 'September 2019',
            company: '32 Negin',
            link: 'http://32negin.com/',
            skills: ['Laravel', 'MySQL', 'Microservice']
        },
        {
            title: 'Web Developer (PartTime)',
            from: 'December 2018',
            to: 'March 2019',
            company: 'Propagation Office',
            skills: ['PHP', 'Laravel', 'MySQL', 'Wordpress']
        },
        {
            title: 'PHP Developer (PartTime)',
            from: 'September 2018',
            to: 'December 2018',
            company: 'Smart Business',
            link: 'https://faraket.com/',
            skills: ['PHP', 'PrestaShop', 'MySQL']
        },
        {
            title: 'PHP Developer (Internship)',
            from: 'June 2018',
            to: 'October 2018',
            company: 'Faraket',
            skills: ['PHP', 'Wordpress', 'MySQL']
        }
    ])

    const degrees: Array<Degree> = reactive([
        {
            grade: 'Bachelor',
            field: 'Software Engineering',
            from: 'September 2020',
            to: 'June 2023',
            university: 'Montazeri Technical College of Mashhad',
            graduated: true
        },
        {
            grade: 'Associate',
            field: 'Software Engineering',
            from: 'September 2017',
            to: 'June 2019',
            university: 'Montazeri Technical College of Mashhad',
            graduated: true
        }
    ])

    const skills: Array<Array<string>> = reactive([
        ['HTML', 'CSS', 'JavaScript', 'PHP'],
        ['GoLang', 'Docker'],
        ['MySQL', 'PostgreSQL', 'Redis'],
        ['OOP', 'SOLID', 'Design Pattern', 'MVC', 'TDD'],
        ['Laravel', 'Lumen', 'Composer'],
        ['Vuejs', 'Tailwind', 'Inertia', 'Nuxt'],
        ['Git', 'GitLab', 'GitHub'],
        ['Agile', 'Scrum']
    ])

    return { jobs, degrees, skills }
})
