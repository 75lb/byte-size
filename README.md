[![view on npm](http://img.shields.io/npm/v/byte-size.svg)](https://www.npmjs.org/package/byte-size)
[![npm module downloads per month](http://img.shields.io/npm/dm/byte-size.svg)](https://www.npmjs.org/package/byte-size)
[![Build Status](https://travis-ci.org/75lb/byte-size.svg?branch=master)](https://travis-ci.org/75lb/byte-size)
[![Dependency Status](https://david-dm.org/75lb/byte-size.svg)](https://david-dm.org/75lb/byte-size)

#byte-size
Convert a value in bytes to a more human-readable size.

####Example
```js
> var biteSize = require("bite-size");
> biteSize(10000)
'10 KB'
> biteSize(10000, 1)
'9.8 KB'
> biteSize(10000, 2)
'9.77 KB'
> biteSize(10000, 3)
'9.766 KB'
```