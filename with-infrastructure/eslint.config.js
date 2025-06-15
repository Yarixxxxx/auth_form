const js = require('@eslint/js');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');
const prettierPlugin = require('eslint-plugin-prettier');
const globals = require('globals');

module.exports = [
  // Базовые правила ESLint
  js.configs.recommended,
  
  // Конфигурация для TypeScript
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json'
      },
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'prettier': prettierPlugin
    },
    rules: {
      // Правила TypeScript
      ...tsPlugin.configs.recommended.rules,
      
      // Наши кастомные правила
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      
      // Интеграция с Prettier
      'prettier/prettier': 'error'
    }
  },
  
  // Глобальные правила для всех файлов
  {
    ignores: ['dist/**', 'node_modules/**']
  }
];