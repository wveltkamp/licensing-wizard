
export default {
    /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
    mode: 'universal',
    /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    /*
  ** Global CSS
  */
    css: [
    ],
    /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
    plugins: [
        { src: "~/plugins/vuelidate" }
    ],
    /*
  ** Nuxt.js dev-modules
  */
    buildModules: [
        '@nuxtjs/style-resources'
    ],
    /*
  ** Nuxt.js modules
  */
    modules: [
    // Doc: https://bootstrap-vue.js.org
        'bootstrap-vue/nuxt',
        
    ],

    bootstrapVue: {
        icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
    },

    styleResources: {
        scss: [
            './assets/scss/vars/*.scss',
            './assets/scss/main.scss'
            //'./assets/abstracts/_mixins.scss' // use underscore "_" & also file extension ".scss"
        ]
    },

    /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
    build: {

    }
};
