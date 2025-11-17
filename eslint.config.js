import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-plugin-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Игнорируем dist
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    // Всё, что у тебя уже было
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],

    plugins: {
      prettier,
    },

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },

    rules: {
      // Автоформатирование через Prettier
      'prettier/prettier': [
        'error',
        {
          trailingComma: 'es5',
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          printWidth: 100,
        },
      ],

      // Удаление лишних пробелов в конце строк
      'no-trailing-spaces': 'error',

      // Всегда один перевод строки в конце файла
      'eol-last': ['error', 'always'],

      // Иногда полезно, но можешь отключить
      'no-multiple-empty-lines': ['error', { max: 1 }],
    },
  },
])
