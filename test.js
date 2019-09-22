const Tom = require('test-runner').Tom
const byteSize = require('./')
const a = require('assert')

const tom = module.exports = new Tom('test')

tom.test('metric', function () {
  a.deepEqual(byteSize(1000), { value: '1.0', unit: 'kB' })
  a.deepEqual(byteSize(-1000), { value: '-1.0', unit: 'kB' })
  a.deepEqual(byteSize(10000), { value: '10.0', unit: 'kB' })
  a.deepEqual(byteSize(34565346), { value: '34.6', unit: 'MB' })
  a.deepEqual(byteSize(56356534635465), { value: '56.4', unit: 'TB' })
  a.deepEqual(byteSize(42436356534635465), { value: '42.4', unit: 'PB' })
  a.deepEqual(byteSize(5342436356534635465), { value: '5.3', unit: 'EB' })
  a.deepEqual(byteSize(234235342436356534635465), { value: '234.2', unit: 'ZB' })
  a.deepEqual(byteSize(345234235342436356534635465), { value: '345.2', unit: 'YB' })
  a.deepEqual(byteSize(3234545234235342436356534635465), { value: '3.2345452342353426e+30', unit: '' })
})

tom.test('iec', function () {
  const options = { units: 'iec' }
  a.deepEqual(byteSize(1000, options), { value: '1000', unit: 'B' })
  a.deepEqual(byteSize(10000, options), { value: '9.8', unit: 'KiB' })
  a.deepEqual(byteSize(-10000, options), { value: '-9.8', unit: 'KiB' })
  a.deepEqual(byteSize(34565346, options), { value: '33.0', unit: 'MiB' })
  a.deepEqual(byteSize(56356534635465, options), { value: '51.3', unit: 'TiB' })
  a.deepEqual(byteSize(42436356534635465, options), { value: '37.7', unit: 'PiB' })
  a.deepEqual(byteSize(5342436356534635465, options), { value: '4.6', unit: 'EiB' })
  a.deepEqual(byteSize(234235342436356534635465, options), { value: '198.4', unit: 'ZiB' })
  a.deepEqual(byteSize(345234235342436356534635465, options), { value: '285.6', unit: 'YiB' })
  a.deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
  a.deepEqual(byteSize(9873234545234235342436356534635465, options), { value: '9.873234545234235e+33', unit: '' })
})

tom.test('metric_octet', function () {
  const options = { units: 'metric_octet' }
  a.deepEqual(byteSize(1000, options), { value: '1.0', unit: 'ko' })
  a.deepEqual(byteSize(10000, options), { value: '10.0', unit: 'ko' })
  a.deepEqual(byteSize(34565346, options), { value: '34.6', unit: 'Mo' })
  a.deepEqual(byteSize(-34565346, options), { value: '-34.6', unit: 'Mo' })
  a.deepEqual(byteSize(56356534635465, options), { value: '56.4', unit: 'To' })
  a.deepEqual(byteSize(42436356534635465, options), { value: '42.4', unit: 'Po' })
  a.deepEqual(byteSize(5342436356534635465, options), { value: '5.3', unit: 'Eo' })
  a.deepEqual(byteSize(234235342436356534635465, options), { value: '234.2', unit: 'Zo' })
  a.deepEqual(byteSize(345234235342436356534635465, options), { value: '345.2', unit: 'Yo' })
  a.deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
})

tom.test('iec_octet', function () {
  const options = { units: 'iec_octet' }
  a.deepEqual(byteSize(1000, options), { value: '1000', unit: 'o' })
  a.deepEqual(byteSize(10000, options), { value: '9.8', unit: 'Kio' })
  a.deepEqual(byteSize(34565346, options), { value: '33.0', unit: 'Mio' })
  a.deepEqual(byteSize(56356534635465, options), { value: '51.3', unit: 'Tio' })
  a.deepEqual(byteSize(-56356534635465, options), { value: '-51.3', unit: 'Tio' })
  a.deepEqual(byteSize(42436356534635465, options), { value: '37.7', unit: 'Pio' })
  a.deepEqual(byteSize(5342436356534635465, options), { value: '4.6', unit: 'Eio' })
  a.deepEqual(byteSize(234235342436356534635465, options), { value: '198.4', unit: 'Zio' })
  a.deepEqual(byteSize(345234235342436356534635465, options), { value: '285.6', unit: 'Yio' })
  a.deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
  a.deepEqual(byteSize(9873234545234235342436356534635465, options), { value: '9.873234545234235e+33', unit: '' })
})

tom.test('precision', function () {
  a.deepEqual(byteSize(10, { precision: 0 }), { value: '10', unit: 'B' })
  a.deepEqual(byteSize(15, { precision: 2 }), { value: '15', unit: 'B' })
  a.deepEqual(byteSize(1500, { precision: 0 }), { value: '2', unit: 'kB' })
  a.deepEqual(byteSize(1500, { precision: 2 }), { value: '1.50', unit: 'kB' })
  a.deepEqual(byteSize(-1500, { precision: 2 }), { value: '-1.50', unit: 'kB' })
  a.deepEqual(byteSize(1500000, { precision: 5 }), { value: '1.50000', unit: 'MB' })
})

tom.test('toString', function () {
  a.strictEqual(byteSize(1000).toString(), '1.0 kB')
  a.strictEqual(byteSize(-1000).toString(), '-1.0 kB')
})
