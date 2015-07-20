[![view on npm](http://img.shields.io/npm/v/byte-size.svg)](https://www.npmjs.org/package/byte-size)
[![npm module downloads per month](http://img.shields.io/npm/dm/byte-size.svg)](https://www.npmjs.org/package/byte-size)
[![Build Status](https://travis-ci.org/75lb/byte-size.svg?branch=master)](https://travis-ci.org/75lb/byte-size)
[![Dependency Status](https://david-dm.org/75lb/byte-size.svg)](https://david-dm.org/75lb/byte-size)

<a name="module_byte-size"></a>
## byte-size
Convert a value in bytes to a more human-readable size.

<a name="exp_module_byte-size--byteSize"></a>
### byteSize(bytes, [precision]) ⇒ <code>string</code> ⏏
**Kind**: Exported function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| bytes | <code>number</code> |  | the bytes value to convert |
| [precision] | <code>number</code> | <code>0</code> | number of decimal places |

**Example**  
```js
> var byteSize = require("byte-size");

> byteSize(10000)
'10 KB'

> byteSize(10000, 1)
'9.8 KB'

> byteSize(10000, 2)
'9.77 KB'

> byteSize(10000, 3)
'9.766 KB'

> byteSize(1234000, 2)
'1.18 MB'

> byteSize(32432434000, 2)
'30.21 GB'

> byteSize(324324342354360, 2)
'294.97 TB'
```

* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
