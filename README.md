# bem-classname-parser

[![Commitizen friendly][commitizen-image]][commitizen-url]
[![XO code style][codestyle-image]][codestyle-url]

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]
[![Dependency Status][depstat-image]][depstat-url]
[![DevDependency Status][depstat-dev-image]][depstat-dev-url]

> Parse Block Element Modifier from `block__elem_mod`, `block__elem--mod` etc.

## Install

```
npm install --save bem-classname-parser
```

## Usage

```js
var bemClassnameParser = require('bem-classname-parser');

bemClassnameParser.parse('block__elem_mod-name_mod-value');
// {
//   block: {
//     name: 'block'
//   },
//   elem: {
//     name: 'elem',
//     mod: {
//       name: 'mod-name',
//       val: 'mod-value',
//       sep: '_'
//     }
//   }
// }

bemClassnameParser.parse('block--mod');
// {
//   block: {
//     name: 'block',
//     mod: {
//       name: 'mod',
//       val: null,
//       sep: '--'
//     }
//   }
// }

bemClassnameParser.parse('');
// {}
```

## License

MIT © [Vladimir Rodkin](https://github.com/VovanR)

[commitizen-url]: http://commitizen.github.io/cz-cli/
[commitizen-image]: https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square

[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square

[npm-url]: https://npmjs.org/package/bem-classname-parser
[npm-image]: http://img.shields.io/npm/v/bem-classname-parser.svg?style=flat-square

[travis-url]: https://travis-ci.org/VovanR/bem-classname-parser
[travis-image]: http://img.shields.io/travis/VovanR/bem-classname-parser.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/VovanR/bem-classname-parser
[coveralls-image]: http://img.shields.io/coveralls/VovanR/bem-classname-parser.svg?style=flat-square

[depstat-url]: https://david-dm.org/VovanR/bem-classname-parser
[depstat-image]: https://david-dm.org/VovanR/bem-classname-parser.svg?style=flat-square

[depstat-dev-url]: https://david-dm.org/VovanR/bem-classname-parser
[depstat-dev-image]: https://david-dm.org/VovanR/bem-classname-parser/dev-status.svg?style=flat-square
