[![view on npm](https://img.shields.io/npm/v/byte-size.svg)](https://www.npmjs.org/package/byte-size)
[![npm module downloads](https://img.shields.io/npm/dt/byte-size.svg)](https://www.npmjs.org/package/byte-size)
[![Build Status](https://travis-ci.org/75lb/byte-size.svg?branch=master)](https://travis-ci.org/75lb/byte-size)
[![Coverage Status](https://coveralls.io/repos/github/75lb/byte-size/badge.svg?branch=master)](https://coveralls.io/github/75lb/byte-size?branch=master)
[![Dependency Status](https://badgen.net/david/dep/75lb/byte-size)](https://david-dm.org/75lb/byte-size)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](https://github.com/feross/standard)

# byte-size

An isomorphic, load-anywhere function to convert a bytes value (e.g. 3456) to a human-readable string ('3.5 kB'). Choose between [metric or IEC units](https://en.wikipedia.org/wiki/Gigabyte), summarised below.

Value  | Metric        | Metric (octet) |
-----  | ------------- | -------------- |
1000   | kB  kilobyte  | ko  kilooctet  |
1000^2 | MB  megabyte  | Mo  megaoctet  |
1000^3 | GB  gigabyte  | Go  gigaoctet  |
1000^4 | TB  terabyte  | To  teraoctet  |
1000^5 | PB  petabyte  | Po  petaoctet  |
1000^6 | EB  exabyte   | Eo  exaoctet   |
1000^7 | ZB  zettabyte | Zo  zettaoctet |
1000^8 | YB  yottabyte | Yo  yottaoctet |

Value  | IEC          | IEC (octet)   |
------ | ------------ | ------------- |
1024   | KiB kibibyte | Kio kilooctet |
1024^2 | MiB mebibyte | Mio mebioctet |
1024^3 | GiB gibibyte | Gio gibioctet |
1024^4 | TiB tebibyte | Tio tebioctet |
1024^5 | PiB pebibyte | Pio pebioctet |
1024^6 | EiB exbibyte | Eio exbioctet |
1024^7 | ZiB zebibyte | Zio zebioctet |
1024^8 | YiB yobibyte | Yio yobioctet |

## Synopsis

```js
> const byteSize = require('byte-size')

> byteSize(1580)
{ value: '1.6', unit: 'kB' }

> byteSize(1580, { units: 'iec' })
{ value: '1.5', unit: 'KiB' }

> byteSize(1580, { units: 'iec', precision: 3 })
{ value: '1.543', unit: 'KiB' }

> byteSize(1580, { units: 'iec', precision: 0 })
{ value: '2', unit: 'KiB' }

> byteSize(1580, { units: 'metric_octet' })
{ value: '1.6', unit: 'ko' }

> byteSize(1580, { units: 'iec_octet' })
{ value: '1.5', unit: 'Kio' }

> byteSize(1580, { units: 'iec_octet' }).toString()
'1.5 Kio'

> const { value, unit }  = byteSize(1580, { units: 'iec_octet' })
> `${value} ${unit}`
'1.5 Kio'
```

<a name="module_byte-size"></a>

## byte-size
<a name="exp_module_byte-size--byteSize"></a>

### byteSize(bytes, [options]) ⇒ <code>object</code> ⏏
Returns an object with the spec `{ value: string, unit: string, long: string }`. The object also defines a `toString` method meaning it can be used in any string context.

**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bytes | <code>number</code> |  | the bytes value to convert. |
| [options] | <code>object</code> |  | optional config. |
| [options.precision] | <code>number</code> | <code>1</code> | number of decimal places. |
| [options.units] | <code>string</code> | <code>&quot;metric&quot;</code> | select `'metric'`, `'iec'`, `'metric_octet'` or `'iec_octet'` units. |


## Load anywhere

This library is compatible with Node.js, the Web and any style of module loader. It can be loaded anywhere, natively without transpilation.

Node.js:

```js
const byteSize = require('byte-size')
```

Within Node.js with ECMAScript Module support enabled:

```js
import byteSize from 'byte-size'
```

Within a modern browser ECMAScript Module:

```js
import byteSize from './node_modules/byte-size/index.mjs'
```

Old browser (adds `window.byteSize`):

```html
<script nomodule src="./node_modules/byte-size/dist/index.js"></script>
```

* * *

&copy; 2014-19 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
