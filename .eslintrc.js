module.exports = {
  env: {
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'no-param-reassign': 0,
    'import/namespace': 0,
    'no-shadow': 0,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
  },
};
