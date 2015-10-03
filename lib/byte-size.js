'use strict'

/**
Convert a bytes value to a more human-readable format.
@module byte-size
*/
module.exports = byteSize

/**
@param {number} - the bytes value to convert
@param {number} [precision=0] - number of decimal places
@returns {string}
@alias module:byte-size
@example
```js
> var byteSize = require("byte-size")

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
function byteSize (bytes, options) {
  options = options || {}
  options.unit = options.unit || 'metric'
  options.precision = typeof options.precision === 'undefined' ? 1 : options.precision

  var table = [
    { expFrom: 0, expTo: 1, metric: 'B', iec: 'B' },
    { expFrom: 1, expTo: 2, metric: 'kB', iec: 'KiB' },
    { expFrom: 2, expTo: 3, metric: 'MB', iec: 'MiB' },
    { expFrom: 3, expTo: 4, metric: 'GB', iec: 'GiB' },
    { expFrom: 4, expTo: 5, metric: 'TB', iec: 'TiB' },
    { expFrom: 5, expTo: 6, metric: 'PB', iec: 'PiB' },
    { expFrom: 6, expTo: 7, metric: 'EB', iec: 'EiB' },
    { expFrom: 7, expTo: 8, metric: 'ZB', iec: 'ZiB' },
    { expFrom: 8, expTo: 9, metric: 'YB', iec: 'YiB' }
  ]

  var base = options.unit === 'metric' ? 1000 : 1024

  for (var i = 0; i < table.length; i++) {
    var lower = Math.pow(base, table[i].expFrom)
    var upper = Math.pow(base, table[i].expTo)
    if (bytes >= lower && bytes < upper) {
      var unit = table[i][options.unit]
      if (i === 0) {
        return bytes + ' ' + unit
      } else {
        return (bytes / lower).toFixed(options.precision) + ' ' + unit
      }
    }
  }

  return bytes
}
