/**
 * @module byte-size
 */

class ByteSize {
  constructor (bytes, options) {
    options = Object.assign({
      units: 'metric',
      precision: 1
    }, options)

    const tables = {
      metric: [
        { from: 0   , to: 1e3 , unit: 'B' , long: 'byte' },
        { from: 1e3 , to: 1e6 , unit: 'kB', long: 'kilobyte' },
        { from: 1e6 , to: 1e9 , unit: 'MB', long: 'megabyte' },
        { from: 1e9 , to: 1e12, unit: 'GB', long: 'gigabyte' },
        { from: 1e12, to: 1e15, unit: 'TB', long: 'terabyte' },
        { from: 1e15, to: 1e18, unit: 'PB', long: 'petabyte' },
        { from: 1e18, to: 1e21, unit: 'EB', long: 'exabyte' },
        { from: 1e21, to: 1e24, unit: 'ZB', long: 'zettabyte' },
        { from: 1e24, to: 1e27, unit: 'YB', long: 'yottabyte' },
      ],
      metric_octet: [
        { from: 0   , to: 1e3 , unit: 'o' , long: 'octet' },
        { from: 1e3 , to: 1e6 , unit: 'ko', long: 'kilooctet' },
        { from: 1e6 , to: 1e9 , unit: 'Mo', long: 'megaoctet' },
        { from: 1e9 , to: 1e12, unit: 'Go', long: 'gigaoctet' },
        { from: 1e12, to: 1e15, unit: 'To', long: 'teraoctet' },
        { from: 1e15, to: 1e18, unit: 'Po', long: 'petaoctet' },
        { from: 1e18, to: 1e21, unit: 'Eo', long: 'exaoctet' },
        { from: 1e21, to: 1e24, unit: 'Zo', long: 'zettaoctet' },
        { from: 1e24, to: 1e27, unit: 'Yo', long: 'yottaoctet' },
      ],
      iec: [
        { from: 0                , to: Math.pow(1024, 1), unit: 'B'  , long: 'byte' },
        { from: Math.pow(1024, 1), to: Math.pow(1024, 2), unit: 'KiB', long: 'kibibyte' },
        { from: Math.pow(1024, 2), to: Math.pow(1024, 3), unit: 'MiB', long: 'mebibyte' },
        { from: Math.pow(1024, 3), to: Math.pow(1024, 4), unit: 'GiB', long: 'gibibyte' },
        { from: Math.pow(1024, 4), to: Math.pow(1024, 5), unit: 'TiB', long: 'tebibyte' },
        { from: Math.pow(1024, 5), to: Math.pow(1024, 6), unit: 'PiB', long: 'pebibyte' },
        { from: Math.pow(1024, 6), to: Math.pow(1024, 7), unit: 'EiB', long: 'exbibyte' },
        { from: Math.pow(1024, 7), to: Math.pow(1024, 8), unit: 'ZiB', long: 'zebibyte' },
        { from: Math.pow(1024, 8), to: Math.pow(1024, 9), unit: 'YiB', long: 'yobibyte' },
      ],
      iec_octet: [
        { from: 0                , to: Math.pow(1024, 1), unit: 'o'  , long: 'octet' },
        { from: Math.pow(1024, 1), to: Math.pow(1024, 2), unit: 'Kio', long: 'kilooctet' },
        { from: Math.pow(1024, 2), to: Math.pow(1024, 3), unit: 'Mio', long: 'mebioctet' },
        { from: Math.pow(1024, 3), to: Math.pow(1024, 4), unit: 'Gio', long: 'gibioctet' },
        { from: Math.pow(1024, 4), to: Math.pow(1024, 5), unit: 'Tio', long: 'tebioctet' },
        { from: Math.pow(1024, 5), to: Math.pow(1024, 6), unit: 'Pio', long: 'pebioctet' },
        { from: Math.pow(1024, 6), to: Math.pow(1024, 7), unit: 'Eio', long: 'exbioctet' },
        { from: Math.pow(1024, 7), to: Math.pow(1024, 8), unit: 'Zio', long: 'zebioctet' },
        { from: Math.pow(1024, 8), to: Math.pow(1024, 9), unit: 'Yio', long: 'yobioctet' },
      ],
    }

    const prefix = bytes < 0 ? '-' : ''
    bytes = Math.abs(bytes)
    const table = options.table || tables[options.units]
    const units = table.find(u => bytes >= u.from && bytes < u.to)
    if (units) {
      const value = units.from === 0
        ? prefix + bytes
        : prefix + (bytes / units.from).toFixed(options.precision)
      this.value = value
      this.unit = units.unit
      this.long = units.long
    } else {
      this.value = prefix + bytes
      this.unit = ''
      this.long = ''
    }
  }

  toString () {
    return `${this.value} ${this.unit}`.trim()
  }
}

/**
 * Returns an object with the spec `{ value: string, unit: string, long: string }`.
 * @param {number} - the bytes value to convert.
 * @param [options] {object} - optional config.
 * @param [options.precision=1] {number} - number of decimal places.
 * @param [options.units=metric] {string} - select `'metric'`, `'iec'`, `'metric_octet'` or `'iec_octet'` units.
 * @returns {object}
 * @alias module:byte-size
 */
function byteSize (bytes, options) {
  return new ByteSize(bytes, options)
}

export default byteSize
