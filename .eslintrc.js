module.exports = {
  root: true,
  extends: ['prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'simple-import-sort'],
  globals: {},
  rules: {
    'prettier/prettier': 2,
    semi: ['error', 'never'],
    'simple-import-sort/imports': 'error',
    'max-len': ['error', 100, { ignoreUrls: true }],
    curly: 'error',
  },
}
