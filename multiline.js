/*!
	multiline
	Multiline strings in JavaScript
	https://github.com/sindresorhus/multiline
	by Sindre Sorhus
	MIT License
*/
(function () {
	'use strict';

	// start matching after: comment start block => optional whitespace => newline
	// stop matching before: last newline => optional whitespace => comment end block

	var multiline = function () {
		if (typeof arguments[0] !== 'function') {
			throw new TypeError('Expected a function.');
		}
		return /\/\*\s*(?:\r\n|\n)([\s\S]*?)(?:\r\n|\n)\s*\*\//.exec(arguments[0].toString())[1].replace(/\$\[(.*)?\]/g, function(){return eval(arguments[1])});
	};

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = multiline;
	} else {
		window.multiline = multiline;
	}
})();
