// eslint.config.js
import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import pluginImport from 'eslint-plugin-import';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';

export default defineConfig([
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      '.storybook/**',
      'public/service-worker.js',
      'vite.config.*',
      '*.config.*',
      '*.env.*',
      '.env',
      '.env.*',
      'vitest.workspace.ts',
      '**/*.d.ts'
    ]
  },
  {
    files: [
      '**/*.config.js',
      '**/*.config.ts',
      '**/*.config.mjs',
      '**/*.config.cjs',
      'vite.config.ts',
      'storybook/**/*.ts'
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json'
      }
    },
    rules: {
      ...prettier.rules
      // 필요에 따라 설정 파일에만 적용할 룰을 여기에 작성
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.eslint.json'
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      import: pluginImport,
      react: pluginReact,
      'react-hooks': pluginReactHooks
    },
    rules: {
      ...prettier.rules,
      // React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-no-useless-fragment': 'off',
      'react/jsx-curly-brace-presence': 'off',
      'react/no-array-index-key': 'off',
      'react/jsx-boolean-value': 'off',
      'react/require-default-props': 'off',
      'react/button-has-type': 'off',
      // React Hooks
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      // Import
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling'],
            'index',
            'type',
            'object',
            'unknown'
          ],
          pathGroups: [
            {
              pattern: 'react*',
              group: 'external',
              position: 'before'
            }
          ],
          pathGroupsExcludedImportTypes: ['react'],
          alphabetize: {
            order: 'asc',
            caseInsensitive: true
          },
          'newlines-between': 'always'
        }
      ],
      'import/prefer-default-export': 'off',
      'import/no-extraneous-dependencies': 'off',
      'import/no-cycle': 'off',
      // General JS / TS rules
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/no-unsafe-return': 'off',
      '@typescript-eslint/no-redundant-type-constituents': 'off',
      '@typescript-eslint/no-unnecessary-type-assertion': 'off',
      'default-case-last': 'off',
      'no-nested-ternary': 'off',
      'no-useless-return': 'off',
      'no-alert': 'off',
      'no-console': 'off',
      'no-param-reassign': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
      'no-restricted-globals': 'off',
      'consistent-return': 'off',
      'no-extra-boolean-cast': 'off',
      'no-multiple-empty-lines': ['error', { max: 1 }]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
]);
