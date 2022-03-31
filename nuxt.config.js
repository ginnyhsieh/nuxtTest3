export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  mode: 'universal',
  head: {
    title: '台灣旅遊景點導覽',
    htmlAttrs: {
      lang: 'zh-TW'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'https://code.jquery.com/jquery-2.2.4.min.js' },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/js/all.js" } 
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  //頁面讀取進度條
  loading: { 
    color: '#40659b',height:"2px",duration:5000 
  },


  //頁面過渡效果
  transition: {
    name: 'layout',
    mode: 'out-in'
  },  

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/datepicker.js', mode: 'client' },
    { src: '~/plugins/gsap.js', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      extractCSS: true,
      imgUrl: { limit: 1000 },
    }
  },

  //伺服器
  serverMiddleware: [
    { path: '/api', handler: '~/server/api.js' },
  ],
}
