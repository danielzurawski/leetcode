module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['plugin:@typescript-eslint/recommended'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    },
    "import/resolver": {
      "node": {
        "extensions": [".js", ".ts"]
      }
    }
  },
  rules: {
    'max-len': ['error', { 'code' : 120 }],
    'new-cap': 0,
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': ["error", { "props": true }],
    'padded-blocks': 0,
    'indent': ['error', 2],
    'no-useless-constructor': 0
  },
  env: {
    'jest': true,
    'node': true
  }
};
