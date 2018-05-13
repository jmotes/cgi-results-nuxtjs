module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'CGi Results',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'CGi Results Website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Poppins:400,700,900' },
      { rel: 'stylesheet', type: 'text/css', href: '//stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    ['storyblok-nuxt', {
      accessToken: 'q1hx2r4veRtVtzRSOXkH1gtt',
      cacheProvider: 'memory'
    }]
  ],
  plugins: ['~/plugins/components.js']
}
