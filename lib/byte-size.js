"use strict";

/**
Convert a value in bytes to a more human-readable size.
@module byte-size
*/
module.exports = byteSize; 

/**
@param {number} - the bytes value to convert
@param {number} [precision=0] - number of decimal places
@returns {string}
@alias module:byte-size
@example
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
```
*/
function byteSize(bytes, precision){
    var kilobyte = 1024,
        megabyte = kilobyte * 1024,
        gigabyte = megabyte * 1024,
        terabyte = gigabyte * 1024;

    if ((bytes >= 0) && (bytes < kilobyte)) {
        return bytes + " B";

    } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
        return (bytes / kilobyte).toFixed(precision) + " KB";

    } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
        return (bytes / megabyte).toFixed(precision) + " MB";

    } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
        return (bytes / gigabyte).toFixed(precision) + " GB";

    } else if (bytes >= terabyte) {
        return (bytes / terabyte).toFixed(precision) + " TB";

    } else {
        return bytes + " B";
    }
};
