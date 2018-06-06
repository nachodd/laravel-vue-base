const config = require('./webpack.config')
const mix = require('laravel-mix')

// mix.setPublicPath('./public');
mix.config.vue.esModule = true
mix
  .js('resources/assets/js/app.js', 'public/dist/js')
  .sass('resources/assets/sass/app.scss', 'public/dist/css')

  .sourceMaps()
  .disableNotifications()

if (mix.inProduction()) {
  mix.version()

  mix.extract([
    'vue',
    'vform',
    'axios',
    'vuex',
    'jquery',
    'popper.js',
    'vue-i18n',
    'vue-meta',
    'js-cookie',
    'bootstrap',
    'vue-router',
    'sweetalert2',
    'vuex-router-sync',
    '@fortawesome/fontawesome',
    '@fortawesome/vue-fontawesome'
  ])
}

mix.webpackConfig(config)
