import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
  pluginJs.configs.recommended,
  {
    rules: {
      quotes: ['error', 'single'],
      'no-unused-vars': 'error',
      'no-undef': 'error',
      indent: ['error', 'tab'],
      semi: ['error', 'never'],
      'linebreak-style': ['error', 'unix'],
      'plugin:react/jsx-runtime': 'off',
    },
  },
  { files: ['**/*.js'], languageOptions: { sourceType: 'commonjs' } },
  { languageOptions: { globals: globals.node } },
  eslintConfigPrettier,
];

/*
  nível de regra
  "off" or 0 - desabilita a regra
  "warn" or 1 - deixa como aviso (não tem efeito no código)
  "error" or 2 - deixa como erro (tem efeito no código)
*/
