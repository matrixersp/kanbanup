module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 12,
  },
  ignorePatterns: ['node_modules'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        tabWidth: 2,
      },
    ],
    'no-console': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-underscore-dangle': 'off',
  },
};
