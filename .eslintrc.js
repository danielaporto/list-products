module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    OFDB: 'readonly',
    systemConfiguration: 'readonly',
  },
  overrides: [
    {
      files: ['.ts', '.tsx'],
      rules: {
        'no-undef': 'off',
        'no-multi-spaces': 'warn',
        'no-empty': 'warn',
        'no-unsafe-optional-chaining': 'warn',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-control-regex': 0,
    'no-unused-vars': 'off',
    'no-var': 0,
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    'react/jsx-key': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['warn', { ignoreTypeReferences: true, typedefs: false }],
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['warn'],
    '@typescript-eslint/no-non-null-asserted-optional-chain': ['off'],
    '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
    '@typescript-eslint/ban-types': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
