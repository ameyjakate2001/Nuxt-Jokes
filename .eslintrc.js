module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  // parserOptions: {
  //   parser: 'babel-eslint'
  // },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    'eol-last': 0,
    'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
}
