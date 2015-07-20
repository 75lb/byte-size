[![view on npm](http://img.shields.io/npm/v/byte-size.svg)](https://www.npmjs.org/package/byte-size)
[![npm module downloads per month](http://img.shields.io/npm/dm/byte-size.svg)](https://www.npmjs.org/package/byte-size)
[![Build Status](https://travis-ci.org/75lb/byte-size.svg?branch=master)](https://travis-ci.org/75lb/byte-size)
[![Dependency Status](https://david-dm.org/75lb/byte-size.svg)](https://david-dm.org/75lb/byte-size)

<a name="module_byte-size"></a>
## byte-size ⇒ <code>string</code>
Convert a value in bytes to a more human-readable size.


| Param | Type | Default | Description |
| --- | --- | --- | --- |
|  | <code>number</code> |  | the bytes value to convert |
| [precision] | <code>number</code> | <code>0</code> | number of decimal places |

**Example**  
```js
var byteSize = require("byte-size");
> byteSize(10000)
'10 KB'
> byteSize(10000, 1)
'9.8 KB'
> byteSize(10000, 2)
'9.77 KB'
> byteSize(10000, 3)
'9.766 KB'
```

* * *

&copy; 2015 Lloyd Brookes \<75pound@gmail.com\>. Documented by [jsdoc-to-markdown](https://github.com/jsdoc2md/jsdoc-to-markdown).
