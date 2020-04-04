/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-04-04 11:04:02
 */
module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
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
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  // Global CSS
  css: [
    // 'ant-design-vue/dist/antd.css'
    // 按需引入ant-ui
    // './style/basic.less',
    'ant-design-vue/lib/button/style/css',
    'ant-design-vue/lib/steps/style/css',
    'ant-design-vue/lib/form/style/css',
    'ant-design-vue/lib/input/style/css'
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
