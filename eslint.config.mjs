// eslint.config.mjs - Versión modular
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import perfectionist from 'eslint-plugin-perfectionist';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Configuración base
const baseConfig = [
  ...compat.extends(
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'next/core-web-vitals'
  ),
];

// Configuración de perfectionist
const perfectionistConfig = {
  plugins: {
    perfectionist,
    'unused-imports': require('eslint-plugin-unused-imports'),
  },
  rules: {
    'perfectionist/sort-imports': [
      'error',
      {
        order: 'asc',
        type: 'line-length',
        'newlines-between': 'always',
        groups: [
          // ... tus grupos personalizados
        ],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

// Configuración de ignores
const ignoreConfig = {
  ignores: ['node_modules/', '.next/', 'dist/', 'build/', '*.config.*'],
};

// Exportar configuración combinada
export default [...baseConfig, perfectionistConfig, ignoreConfig];
