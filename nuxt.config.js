module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'csrv4',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + Vuetify.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  plugins: ['~/plugins/vuetify.js'],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/main.css'
  ],
  generate: {
    routes: [
      '/properties/coronation-street/battersby',
      '/properties/coronation-street/barlow',
      '/properties/coronation-street/bishop',
      '/properties/coronation-street/duckworth',
      '/properties/coronation-street/tanner',
      '/properties/coronation-street/tilsley',
      '/properties/fair-street/alpha',
      '/properties/fair-street/bravo',
      '/properties/fair-street/charlie'
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    extractCSS: true,
    /*
    ** Run ESLINT on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
