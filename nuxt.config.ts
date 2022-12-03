// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    ssr: false,
    app: {
        head: {
            title: 'Hossein Nodehi - CV',
            meta: [
                { name: 'author', content: 'Hossein Nodehi' }
            ],
            link: [
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat&display=swap' },
                { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Mono&display=swap' },
            ],
            style: [
                { children: '.font-montserrat{font-family: Montserrat}.font-spacemono{font-family: \'Space Mono\'}' }
            ],
        }
    }
})
