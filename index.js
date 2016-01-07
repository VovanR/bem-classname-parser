// `item_mod` -> `item`
// `item--mod` -> `item`
function parseName(source) {
	var result = source;
	var sep = parseModSep(source);

	if (sep) {
		result = source.split(sep)[0];
	}

	return result;
}

// `item_mod` -> `mod`
// `item--mod` -> `mod`
function parseModName(source) {
	var result = '';
	var sep = parseModSep(source);
	var div;

	if (sep) {
		div = source.split(sep);
		if (div.length > 1) {
			result = div[1];
		}
	}

	return result;
}

// `item_mod_val` -> `val`
function parseModVal(source) {
	var result = '';
	var div = source.split('_');

	if (div.length > 2) {
		result = div[2];
	}

	return result;
}

// `item_mod` -> `_`
// `item--mod` -> `--`
function parseModSep(source) {
	var result = '';

	if (/_/.test(source)) {
		result = '_';
	} else if (/--/.test(source)) {
		result = '--';
	}

	return result;
}

function parseMod(source) {
	var result = null;
	var sep = parseModSep(source);
	var name;

	if (sep) {
		name = parseModName(source);
		if (name) {
			result = {
				name: name,
				val: parseModVal(source) || null,
				sep: sep
			};
		}
	}

	return result;
}

module.exports = {
	/**
	 * BEM data
	 *
	 * @param {String} source
	 * @return {Object}
	 */
	parse: function (source) {
		var result = {};

		if (!source) {
			return result;
		}

		// Separate block and elem
		var div = source.split('__');

		var item = div[0];
		var part = 'block';

		result[part] = {
			name: parseName(item)
		};

		// If elem
		if (div.length > 1) {
			item = div[1];
			part = 'elem';

			result[part] = {
				name: parseName(item)
			};
		}

		// Parse mod
		var mod = parseMod(item);
		if (mod) {
			result[part].mod = mod;
		}

		return result;
	}
};
