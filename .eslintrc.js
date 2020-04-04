/*
 *  Description:
 *  Author: LuckRain7
 *  Date: 2020-04-04 11:04:02
 */
module.exports = {
  root: true,
  env: {
    // browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    // 'plugin:prettier/recommended',
    // 'plugin:nuxt/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'nuxt/no-cjs-in-config': 'off'
  }
}
