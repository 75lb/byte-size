'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var TestRunner = _interopDefault(require('test-runner'));
var a = _interopDefault(require('assert'));

/**
 * An isomorphic, load-anywhere function to convert a bytes value into a more human-readable format. Choose between [metric or IEC units](https://en.wikipedia.org/wiki/Gigabyte), summarised below.
 *
 * Value | Metric
 * ----- | -------------
 * 1000  | kB  kilobyte
 * 1000^2 | MB  megabyte
 * 1000^3 | GB  gigabyte
 * 1000^4 | TB  terabyte
 * 1000^5 | PB  petabyte
 * 1000^6 | EB  exabyte
 * 1000^7 | ZB  zettabyte
 * 1000^8 | YB  yottabyte
 *
 * Value | IEC
 * ----- | ------------
 * 1024  | KiB kibibyte
 * 1024^2 | MiB mebibyte
 * 1024^3 | GiB gibibyte
 * 1024^4 | TiB tebibyte
 * 1024^5 | PiB pebibyte
 * 1024^6 | EiB exbibyte
 * 1024^7 | ZiB zebibyte
 * 1024^8 | YiB yobibyte
 *
 * Value | Metric (octet)
 * ----- | -------------
 * 1000  | ko  kilooctet
 * 1000^2 | Mo  megaoctet
 * 1000^3 | Go  gigaoctet
 * 1000^4 | To  teraoctet
 * 1000^5 | Po  petaoctet
 * 1000^6 | Eo  exaoctet
 * 1000^7 | Zo  zettaoctet
 * 1000^8 | Yo  yottaoctet
 *
 * Value | IEC (octet)
 * ----- | ------------
 * 1024  | Kio kilooctet
 * 1024^2 | Mio mebioctet
 * 1024^3 | Gio gibioctet
 * 1024^4 | Tio tebioctet
 * 1024^5 | Pio pebioctet
 * 1024^6 | Eio exbioctet
 * 1024^7 | Zio zebioctet
 * 1024^8 | Yio yobioctet
 *
 * @module byte-size
 * @example
 * ```js
 * const byteSize = require('byte-size')
 * ```
 */

class ByteSize {
  constructor (bytes, options) {
    options = options || {};
    options.units = options.units || 'metric';
    options.precision = typeof options.precision === 'undefined' ? 1 : options.precision;

    const table = [
      { expFrom: 0, expTo: 1, metric: 'B', iec: 'B', metric_octet: 'o', iec_octet: 'o' },
      { expFrom: 1, expTo: 2, metric: 'kB', iec: 'KiB', metric_octet: 'ko', iec_octet: 'Kio' },
      { expFrom: 2, expTo: 3, metric: 'MB', iec: 'MiB', metric_octet: 'Mo', iec_octet: 'Mio' },
      { expFrom: 3, expTo: 4, metric: 'GB', iec: 'GiB', metric_octet: 'Go', iec_octet: 'Gio' },
      { expFrom: 4, expTo: 5, metric: 'TB', iec: 'TiB', metric_octet: 'To', iec_octet: 'Tio' },
      { expFrom: 5, expTo: 6, metric: 'PB', iec: 'PiB', metric_octet: 'Po', iec_octet: 'Pio' },
      { expFrom: 6, expTo: 7, metric: 'EB', iec: 'EiB', metric_octet: 'Eo', iec_octet: 'Eio' },
      { expFrom: 7, expTo: 8, metric: 'ZB', iec: 'ZiB', metric_octet: 'Zo', iec_octet: 'Zio' },
      { expFrom: 8, expTo: 9, metric: 'YB', iec: 'YiB', metric_octet: 'Yo', iec_octet: 'Yio' }
    ];

    const base = options.units === 'metric' || options.units === 'metric_octet' ? 1000 : 1024;
    const prefix = bytes < 0 ? '-' : '';
    bytes = Math.abs(bytes);

    for (let i = 0; i < table.length; i++) {
      const lower = Math.pow(base, table[i].expFrom);
      const upper = Math.pow(base, table[i].expTo);
      if (bytes >= lower && bytes < upper) {
        const units = table[i][options.units];
        if (i === 0) {
          this.value = prefix + bytes;
          this.unit = units;
          return
        } else {
          this.value = prefix + (bytes / lower).toFixed(options.precision);
          this.unit = units;
          return
        }
      }
    }

    this.value = prefix + bytes;
    this.unit = '';
  }

  toString (delimiter = ' ') {
    return [this.value, this.unit].filter(Boolean).join(delimiter)
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

const runner = new TestRunner();

runner.test('metric', function () {
  a.deepEqual(byteSize(1000), { value: '1.0', unit: 'kB' });
  a.deepEqual(byteSize(-1000), { value: '-1.0', unit: 'kB' });
  a.deepEqual(byteSize(10000), { value: '10.0', unit: 'kB' });
  a.deepEqual(byteSize(34565346), { value: '34.6', unit: 'MB' });
  a.deepEqual(byteSize(56356534635465), { value: '56.4', unit: 'TB' });
  a.deepEqual(byteSize(42436356534635465), { value: '42.4', unit: 'PB' });
  a.deepEqual(byteSize(5342436356534635465), { value: '5.3', unit: 'EB' });
  a.deepEqual(byteSize(234235342436356534635465), { value: '234.2', unit: 'ZB' });
  a.deepEqual(byteSize(345234235342436356534635465), { value: '345.2', unit: 'YB' });
  a.deepEqual(byteSize(3234545234235342436356534635465), { value: '3.2345452342353426e+30', unit: '' });
});

runner.test('iec', function () {
  const options = { units: 'iec' };
  a.deepEqual(byteSize(1000, options), { value: '1000', unit: 'B' });
  a.deepEqual(byteSize(10000, options), { value: '9.8', unit: 'KiB' });
  a.deepEqual(byteSize(-10000, options), { value: '-9.8', unit: 'KiB' });
  a.deepEqual(byteSize(34565346, options), { value: '33.0', unit: 'MiB' });
  a.deepEqual(byteSize(56356534635465, options), { value: '51.3', unit: 'TiB' });
  a.deepEqual(byteSize(42436356534635465, options), { value: '37.7', unit: 'PiB' });
  a.deepEqual(byteSize(5342436356534635465, options), { value: '4.6', unit: 'EiB' });
  a.deepEqual(byteSize(234235342436356534635465, options), { value: '198.4', unit: 'ZiB' });
  a.deepEqual(byteSize(345234235342436356534635465, options), { value: '285.6', unit: 'YiB' });
  a.deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' });
  a.deepEqual(byteSize(9873234545234235342436356534635465, options), { value: '9.873234545234235e+33', unit: '' });
});

runner.test('metric_octet', function () {
  const options = { units: 'metric_octet' };
  a.deepEqual(byteSize(1000, options), { value: '1.0', unit: 'ko' });
  a.deepEqual(byteSize(10000, options), { value: '10.0', unit: 'ko' });
  a.deepEqual(byteSize(34565346, options), { value: '34.6', unit: 'Mo' });
  a.deepEqual(byteSize(-34565346, options), { value: '-34.6', unit: 'Mo' });
  a.deepEqual(byteSize(56356534635465, options), { value: '56.4', unit: 'To' });
  a.deepEqual(byteSize(42436356534635465, options), { value: '42.4', unit: 'Po' });
  a.deepEqual(byteSize(5342436356534635465, options), { value: '5.3', unit: 'Eo' });
  a.deepEqual(byteSize(234235342436356534635465, options), { value: '234.2', unit: 'Zo' });
  a.deepEqual(byteSize(345234235342436356534635465, options), { value: '345.2', unit: 'Yo' });
  a.deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' });
});

runner.test('iec_octet', function () {
  const options = { units: 'iec_octet' };
  a.deepEqual(byteSize(1000, options), { value: '1000', unit: 'o' });
  a.deepEqual(byteSize(10000, options), { value: '9.8', unit: 'Kio' });
  a.deepEqual(byteSize(34565346, options), { value: '33.0', unit: 'Mio' });
  a.deepEqual(byteSize(56356534635465, options), { value: '51.3', unit: 'Tio' });
  a.deepEqual(byteSize(-56356534635465, options), { value: '-51.3', unit: 'Tio' });
  a.deepEqual(byteSize(42436356534635465, options), { value: '37.7', unit: 'Pio' });
  a.deepEqual(byteSize(5342436356534635465, options), { value: '4.6', unit: 'Eio' });
  a.deepEqual(byteSize(234235342436356534635465, options), { value: '198.4', unit: 'Zio' });
  a.deepEqual(byteSize(345234235342436356534635465, options), { value: '285.6', unit: 'Yio' });
  a.deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' });
  a.deepEqual(byteSize(9873234545234235342436356534635465, options), { value: '9.873234545234235e+33', unit: '' });
});

runner.test('precision', function () {
  a.deepEqual(byteSize(10, { precision: 0 }), { value: '10', unit: 'B' });
  a.deepEqual(byteSize(15, { precision: 2 }), { value: '15', unit: 'B' });
  a.deepEqual(byteSize(1500, { precision: 0 }), { value: '2', unit: 'kB' });
  a.deepEqual(byteSize(1500, { precision: 2 }), { value: '1.50', unit: 'kB' });
  a.deepEqual(byteSize(-1500, { precision: 2 }), { value: '-1.50', unit: 'kB' });
  a.deepEqual(byteSize(1500000, { precision: 5 }), { value: '1.50000', unit: 'MB' });
});

runner.test('toString', function () {
  a.strictEqual(byteSize(1000).toString(), '1.0 kB');
  a.strictEqual(byteSize(-1000).toString(), '-1.0 kB');
  a.strictEqual(byteSize(1000).toString(''), '1.0kB');
  a.strictEqual(byteSize(1000).toString('XYZ'), '1.0XYZkB');
  a.strictEqual(byteSize(3234545234235342436356534635465).toString('XYZ'), '3.2345452342353426e+30');
});
