import prettier from 'eslint-plugin-prettier';
import globals from 'globals';
import js from '@eslint/js';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    ignores: ['node_modules/**/*', '.husky/**/*', '.vscode/**/*'],
  },
  js.configs.recommended,
  {
    plugins: {
      prettier: prettier,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      ecmaVersion: 'latest',
      sourceType: 'module',
    },

    rules: {
      'prettier/prettier': 'warn',
      'no-underscore-dangle': 'off',
      eqeqeq: 'off',
      'no-plusplus': 'off',
      'no-console': 'off',
      'operator-assignment': 'off',
      'no-param-reassign': 'off',
      'no-ex-assign': 'off',
      'prefer-template': 'warn',
      'no-unused-vars': 'warn',
      camelcase: [
        'error',
        {
          allow: ['^[a-zA-Z0-9_]+$'],
        },
      ],
    },
  },
  {
    files: ['**/*.test.js', '**/*.spec.js'],
    ...pluginJest.configs['flat/recommended'],
    rules: {
      ...pluginJest.configs['flat/recommended'].rules,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      // Additional rules specific for JS/MJS/CJS files
    },
  },
];
