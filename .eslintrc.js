module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended'],
  globals: {},
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react', 'jest'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    camelcase: 'warn',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'],
      },
    },
  },
};
