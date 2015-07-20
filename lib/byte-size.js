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

> byteSize(1234000, 2)
'1.18 MB'

> byteSize(32432434000, 2)
'30.21 GB'

> byteSize(324324342354360, 2)
'294.97 TB'
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
