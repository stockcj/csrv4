const config = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Cambridge Serviced Rooms',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui' },
      { hid: 'description', name: 'description', content: 'Cambridge Serviced Rooms offers luxurious shared accomodation in the heart of Cambridge. Perfect for studying, or working in the city.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/csr.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' },
      { rel: 'canonical', href: 'http://cambridgeservicedrooms.com/' }
    ],
    script: [
      { src: 'https://use.fontawesome.com/releases/v5.0.13/js/all.js', integrity: 'sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe',
        crossorigin: 'anonymous'}
    ]
  },
  transition: 'page',
  layoutTransition: 'layout',
  plugins: [
    '~/plugins/vuetify.js',
    '~/plugins/vue-scrollmonitor.js'
  ],
  css: [
    '~/assets/style/app.styl',
    '~/assets/style/main.css'
  ],
  generate: {
    routes: [
      '/coronation-street/battersby',
      '/coronation-street/barlow',
      '/coronation-street/bishop',
      '/coronation-street/duckworth',
      '/coronation-street/tanner',
      '/coronation-street/tilsley',
      '/fair-street/may',
      '/fair-street/midsummer',
      '/fair-street/reach',
      '/fair-street/stourbridge',
      '/fair-street/strawberry',
      '/fair-street/winter',
      '/thanks',
      '/reviews',
      '/contact'
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
    vendor: ['vuetify', 'vue-scrollmonitor'],
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
  },
  mode: 'spa',
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
  }
}
