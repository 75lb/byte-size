'use strict'
var TestRunner = require('test-runner')
var byteSize = require('../')
var a = require('core-assert')

var runner = new TestRunner()

runner.test('metric', function (t) {
  a.deepStrictEqual(byteSize(1000), { value: '1.0', unit: 'kB' })
  a.deepStrictEqual(byteSize(10000), { value: '10.0', unit: 'kB' })
  a.deepStrictEqual(byteSize(34565346), { value: '34.6', unit: 'MB' })
  a.deepStrictEqual(byteSize(56356534635465), { value: '56.4', unit: 'TB' })
  a.deepStrictEqual(byteSize(42436356534635465), { value: '42.4', unit: 'PB' })
  a.deepStrictEqual(byteSize(5342436356534635465), { value: '5.3', unit: 'EB' })
  a.deepStrictEqual(byteSize(234235342436356534635465), { value: '234.2', unit: 'ZB' })
  a.deepStrictEqual(byteSize(345234235342436356534635465), { value: '345.2', unit: 'YB' })
  a.deepStrictEqual(byteSize(3234545234235342436356534635465), { value: '3.2345452342353426e+30', unit: '' })
})

runner.test('iec', function (t) {
  var options = { units: 'iec' }
  a.deepStrictEqual(byteSize(1000, options), { value: '1000', unit: 'B' })
  a.deepStrictEqual(byteSize(10000, options), { value: '9.8', unit: 'KiB' })
  a.deepStrictEqual(byteSize(34565346, options), { value: '33.0', unit: 'MiB' })
  a.deepStrictEqual(byteSize(56356534635465, options), { value: '51.3', unit: 'TiB' })
  a.deepStrictEqual(byteSize(42436356534635465, options), { value: '37.7', unit: 'PiB' })
  a.deepStrictEqual(byteSize(5342436356534635465, options), { value: '4.6', unit: 'EiB' })
  a.deepStrictEqual(byteSize(234235342436356534635465, options), { value: '198.4', unit: 'ZiB' })
  a.deepStrictEqual(byteSize(345234235342436356534635465, options), { value: '285.6', unit: 'YiB' })
  a.deepStrictEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
  a.deepStrictEqual(byteSize(9873234545234235342436356534635465, options), { value: '9.873234545234235e+33', unit: '' })
})

runner.test('metric_octet', function (t) {
  var options = { units: 'metric_octet' }
  a.deepStrictEqual(byteSize(1000, options), { value: '1.0', unit: 'ko' })
  a.deepStrictEqual(byteSize(10000, options), { value: '10.0', unit: 'ko' })
  a.deepStrictEqual(byteSize(34565346, options), { value: '34.6', unit: 'Mo' })
  a.deepStrictEqual(byteSize(56356534635465, options), { value: '56.4', unit: 'To' })
  a.deepStrictEqual(byteSize(42436356534635465, options), { value: '42.4', unit: 'Po' })
  a.deepStrictEqual(byteSize(5342436356534635465, options), { value: '5.3', unit: 'Eo' })
  a.deepStrictEqual(byteSize(234235342436356534635465, options), { value: '234.2', unit: 'Zo' })
  a.deepStrictEqual(byteSize(345234235342436356534635465, options), { value: '345.2', unit: 'Yo' })
  a.deepStrictEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
})

runner.test('iec_octet', function (t) {
  var options = { units: 'iec_octet' }
  a.deepStrictEqual(byteSize(1000, options), { value: '1000', unit: 'o' })
  a.deepStrictEqual(byteSize(10000, options), { value: '9.8', unit: 'Kio' })
  a.deepStrictEqual(byteSize(34565346, options), { value: '33.0', unit: 'Mio' })
  a.deepStrictEqual(byteSize(56356534635465, options), { value: '51.3', unit: 'Tio' })
  a.deepStrictEqual(byteSize(42436356534635465, options), { value: '37.7', unit: 'Pio' })
  a.deepStrictEqual(byteSize(5342436356534635465, options), { value: '4.6', unit: 'Eio' })
  a.deepStrictEqual(byteSize(234235342436356534635465, options), { value: '198.4', unit: 'Zio' })
  a.deepStrictEqual(byteSize(345234235342436356534635465, options), { value: '285.6', unit: 'Yio' })
  a.deepStrictEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
  a.deepStrictEqual(byteSize(9873234545234235342436356534635465, options), { value: '9.873234545234235e+33', unit: '' })
})

runner.test('precision', function (t) {
  a.deepStrictEqual(byteSize(10, { precision: 0 }), { value: '10', unit: 'B' })
  a.deepStrictEqual(byteSize(15, { precision: 2 }), { value: '15', unit: 'B' })
  a.deepStrictEqual(byteSize(1500, { precision: 0 }), { value: '2', unit: 'kB' })
  a.deepStrictEqual(byteSize(1500, { precision: 2 }), { value: '1.50', unit: 'kB' })
  a.deepStrictEqual(byteSize(1500000, { precision: 5 }), { value: '1.50000', unit: 'MB' })
})
