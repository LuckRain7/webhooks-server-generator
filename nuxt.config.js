/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-04-04 11:04:02
 */
module.exports = {
  // 同构应用程序（服务器端呈现+客户端路由导航等）
  mode: 'universal',
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // 在页面切换的时候，Nuxt.js 使用内置的加载组件显示加载进度条。
  loading: { color: '#3b8070' },

  // 全局css
  css: [
    // './style/animate.min.css', // 过渡动画
    // 'ant-design-vue/dist/antd.css'
    // 按需引入ant-ui
    // 'ant-design-vue/lib/button/style/css',
    // 'ant-design-vue/lib/steps/style/css',
    // 'ant-design-vue/lib/form/style/css',
    // 'ant-design-vue/lib/input/style/css'
  ],
  /*
   ** Plugins to load before mounting the App
   */

  plugins: ['@/plugins/antd-ui'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
