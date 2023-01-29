// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts'
    ],
    app: {
        head: {
            title: 'Hossein Nodehi - CV',
            meta: [
                { name: 'author', content: 'Hossein Nodehi' }
            ],
        }
    },
    googleFonts: {
        families: {
            Montserrat: true,
            'Space+Mono': true,
        }
    },
    tailwindcss: {
        exposeConfig: true
    }
})
