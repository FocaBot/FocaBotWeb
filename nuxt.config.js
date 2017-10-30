module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'FocaBot',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Easy to use Discord music bot with advanced functions!' },
      { property: 'og:title', content: 'FocaBot | Music with seals!' },
      { property: 'og:image', content: '/focabot_lres.jpg' },
      { property: 'og:description', content: 'Easy to use Discord music bot with advanced functions!' },
      { name: 'theme-color', content: '#1e88e5' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#1e88e5' },
  /*
  ** Build configuration
  */
  build: {
    vendor: ['vuetify'],
    extend (config) {
      // Markdown loader
      config.module.rules[0].options.loaders.md = 'markdownit-loader?html=true'
    }
  },
  plugins: ['~plugins/vuetify.js'],
  css: [
    { src: '~assets/style/app.styl', lang: 'styl' }
  ]
}
