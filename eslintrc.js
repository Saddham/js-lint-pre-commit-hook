module.exports = {
	"env": {
		"es6": false,
		"browser": true,
		"jasmine": true,
		"jquery": true
	},
	"extends": ["airbnb", "plugin:angular/johnpapa", "plugin:jasmine/recommended"],
	"rules": {
		"one-var": ["warn", {
			"var": "always",
			"let": "always",
			"const": "never",
			"separateRequires": true
		}]
	},
	"plugins": [
		"angular",
		"jasmine",
		"prettier"
	]
};