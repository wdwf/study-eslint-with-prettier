import globals from 'globals'
import pluginJs from '@eslint/js'


export default [
	{
		rules: {
			'no-unused-vars': 'error',
			'no-undef': 'error',
			'indent': [
				'error',
				'tab'
			],
			'quotes': [
				'error',
				'single'
			],
			'semi': [
				'error',
				'never'
			],
			'linebreak-style': [
				'error',
				'unix'
			]
		}, 
	},
	{files: ['**/*.js'], languageOptions: {sourceType: 'commonjs'}},
	{languageOptions: { globals: globals.node }},
	pluginJs.configs.recommended,
]

/*
  nível de regra
  "off" or 0 - desabilita a regra
  "warn" or 1 - deixa como aviso (não tem efeito no código)
  "error" or 2 - deixa como erro (tem efeito no código)
*/