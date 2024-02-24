module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-plusplus': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'class-methods-use-this': 'off',
    'no-restricted-syntax': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
  },
};
