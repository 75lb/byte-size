(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.byteSize = factory());
}(this, (function () { 'use strict';

  /**
   * @module byte-size
   * @example
   * ```js
   * const byteSize = require('byte-size')
   * ```
   */

  class ByteSize {
    constructor (bytes, options) {
      options = Object.assign({
        units: 'metric',
        precision: 1
      }, options);

      const tables = {
        metric: [
          { from: 0   , to: 1e3 , unit: 'B' },
          { from: 1e3 , to: 1e6 , unit: 'kB' },
          { from: 1e6 , to: 1e9 , unit: 'MB' },
          { from: 1e9 , to: 1e12, unit: 'GB' },
          { from: 1e12, to: 1e15, unit: 'TB' },
          { from: 1e15, to: 1e18, unit: 'PB' },
          { from: 1e18, to: 1e21, unit: 'EB' },
          { from: 1e21, to: 1e24, unit: 'ZB' },
          { from: 1e24, to: 1e27, unit: 'YB' },
        ],
        metric_octet: [
          { from: 0   , to: 1e3 , unit: 'o' },
          { from: 1e3 , to: 1e6 , unit: 'ko' },
          { from: 1e6 , to: 1e9 , unit: 'Mo' },
          { from: 1e9 , to: 1e12, unit: 'Go' },
          { from: 1e12, to: 1e15, unit: 'To' },
          { from: 1e15, to: 1e18, unit: 'Po' },
          { from: 1e18, to: 1e21, unit: 'Eo' },
          { from: 1e21, to: 1e24, unit: 'Zo' },
          { from: 1e24, to: 1e27, unit: 'Yo' },
        ],
        iec: [
          { from: 0                , to: Math.pow(1024, 1), unit: 'B' },
          { from: Math.pow(1024, 1), to: Math.pow(1024, 2), unit: 'KiB' },
          { from: Math.pow(1024, 2), to: Math.pow(1024, 3), unit: 'MiB' },
          { from: Math.pow(1024, 3), to: Math.pow(1024, 4), unit: 'GiB' },
          { from: Math.pow(1024, 4), to: Math.pow(1024, 5), unit: 'TiB' },
          { from: Math.pow(1024, 5), to: Math.pow(1024, 6), unit: 'PiB' },
          { from: Math.pow(1024, 6), to: Math.pow(1024, 7), unit: 'EiB' },
          { from: Math.pow(1024, 7), to: Math.pow(1024, 8), unit: 'ZiB' },
          { from: Math.pow(1024, 8), to: Math.pow(1024, 9), unit: 'YiB' },
        ],
        iec_octet: [
          { from: 0                , to: Math.pow(1024, 1), unit: 'o' },
          { from: Math.pow(1024, 1), to: Math.pow(1024, 2), unit: 'Kio' },
          { from: Math.pow(1024, 2), to: Math.pow(1024, 3), unit: 'Mio' },
          { from: Math.pow(1024, 3), to: Math.pow(1024, 4), unit: 'Gio' },
          { from: Math.pow(1024, 4), to: Math.pow(1024, 5), unit: 'Tio' },
          { from: Math.pow(1024, 5), to: Math.pow(1024, 6), unit: 'Pio' },
          { from: Math.pow(1024, 6), to: Math.pow(1024, 7), unit: 'Eio' },
          { from: Math.pow(1024, 7), to: Math.pow(1024, 8), unit: 'Zio' },
          { from: Math.pow(1024, 8), to: Math.pow(1024, 9), unit: 'Yio' },
        ],
      };

      const prefix = bytes < 0 ? '-' : '';
      bytes = Math.abs(bytes);
      const table = options.table || tables[options.units];
      const units = table.find(u => bytes >= u.from && bytes < u.to);
      if (units) {
        const value = units.from === 0
          ? prefix + bytes
          : prefix + (bytes / units.from).toFixed(options.precision);
        this.value = value;
        this.unit = units.unit;
      } else {
        this.value = prefix + bytes;
        this.unit = '';
      }
    }

    toString () {
      return `${this.value} ${this.unit}`.trim()
    }
  }

  /**
   * @param {number} - the bytes value to convert.
   * @param [options] {object} - optional config.
   * @param [options.precision=1] {number} - number of decimal places.
   * @param [options.units=metric] {string} - select `'metric'`, `'iec'`, `'metric_octet'` or `'iec_octet'` units.
   * @returns {{ value: string, unit: string}}
   * @alias module:byte-size
   * @example
   * ```js
   * > const byteSize = require('byte-size')
   *
   * > byteSize(1580)
   * { value: '1.6', unit: 'kB' }
   *
   * > byteSize(1580, { units: 'iec' })
   * { value: '1.5', unit: 'KiB' }
   *
   * > byteSize(1580, { units: 'iec', precision: 3 })
   * { value: '1.543', unit: 'KiB' }
   *
   * > byteSize(1580, { units: 'iec', precision: 0 })
   * { value: '2', unit: 'KiB' }
   *
   * > byteSize(1580, { units: 'metric_octet' })
   * { value: '1.6', unit: 'ko' }
   *
   * > byteSize(1580, { units: 'iec_octet' })
   * { value: '1.5', unit: 'Kio' }
   *
   * > byteSize(1580, { units: 'iec_octet' }).toString()
   * '1.5 Kio'
   *
   * > const { value, unit }  = byteSize(1580, { units: 'iec_octet' })
   * > `${value} ${unit}`
   * '1.5 Kio'
   * ```
   */
  function byteSize (bytes, options) {
    return new ByteSize(bytes, options)
  }

  return byteSize;

})));
