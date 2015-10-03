'use strict'

/**
Convert a bytes value to a more human-readable format.
@module byte-size
*/
module.exports = byteSize

/**
@param {number} - the bytes value to convert
@param [options] {object} - optional config
@param [options.precision=1] {number} - number of decimal places
@param [options.units=metric] {string} - select `'metric'` or `'iec'` units
@returns {string}
@alias module:byte-size
@example
```js
> var byteSize = require("byte-size")

> byteSize(1580)
'1.6 kB'

> byteSize(1580, { units: 'iec' })
'1.5 KiB'

> byteSize(1580, { units: 'iec', precision: 3 })
'1.543 KiB'

> byteSize(1580, { units: 'iec', precision: 0 })
'2 KiB'
```
*/
function byteSize (bytes, options) {
  options = options || {}
  options.units = options.units || 'metric'
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

  var base = options.units === 'metric' ? 1000 : 1024

  for (var i = 0; i < table.length; i++) {
    var lower = Math.pow(base, table[i].expFrom)
    var upper = Math.pow(base, table[i].expTo)
    if (bytes >= lower && bytes < upper) {
      var units = table[i][options.units]
      if (i === 0) {
        return bytes + ' ' + units
      } else {
        return (bytes / lower).toFixed(options.precision) + ' ' + units
      }
    }
  }

  return bytes
}
