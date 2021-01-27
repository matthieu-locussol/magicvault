module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier/@typescript-eslint',
		'plugin:prettier/recommended',
	],
	rules: {
		'react/display-name': 'off',
		'react/no-unescaped-entities': 'off',
		'react/jsx-no-comment-textnodes': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
	},
};
