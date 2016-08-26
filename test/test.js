var TestRunner = require('test-runner')
var byteSize = require('../')
var a = require('core-assert')

var runner = new TestRunner()

runner.test('metric', function (t) {
  a.strictEqual(byteSize(1000), '1.0 kB')
  a.strictEqual(byteSize(10000), '10.0 kB')
  a.strictEqual(byteSize(34565346), '34.6 MB')
  a.strictEqual(byteSize(56356534635465), '56.4 TB')
  a.strictEqual(byteSize(42436356534635465), '42.4 PB')
  a.strictEqual(byteSize(5342436356534635465), '5.3 EB')
  a.strictEqual(byteSize(234235342436356534635465), '234.2 ZB')
  a.strictEqual(byteSize(345234235342436356534635465), '345.2 YB')
  a.strictEqual(byteSize(3234545234235342436356534635465), 3.2345452342353426e+30)
})

runner.test('iec', function (t) {
  var options = { units: 'iec' }
  a.strictEqual(byteSize(1000, options), '1000 B')
  a.strictEqual(byteSize(10000, options), '9.8 KiB')
  a.strictEqual(byteSize(34565346, options), '33.0 MiB')
  a.strictEqual(byteSize(56356534635465, options), '51.3 TiB')
  a.strictEqual(byteSize(42436356534635465, options), '37.7 PiB')
  a.strictEqual(byteSize(5342436356534635465, options), '4.6 EiB')
  a.strictEqual(byteSize(234235342436356534635465, options), '198.4 ZiB')
  a.strictEqual(byteSize(345234235342436356534635465, options), '285.6 YiB')
  a.strictEqual(byteSize(3234545234235342436356534635465, options), 3.2345452342353426e+30)
  a.strictEqual(byteSize(9873234545234235342436356534635465, options), 9.873234545234235e+33)
})

runner.test('metric_octet', function (t) {
  var options = { units: 'metric_octet' }
  a.strictEqual(byteSize(1000, options), '1.0 ko')
  a.strictEqual(byteSize(10000, options), '10.0 ko')
  a.strictEqual(byteSize(34565346, options), '34.6 Mo')
  a.strictEqual(byteSize(56356534635465, options), '56.4 To')
  a.strictEqual(byteSize(42436356534635465, options), '42.4 Po')
  a.strictEqual(byteSize(5342436356534635465, options), '5.3 Eo')
  a.strictEqual(byteSize(234235342436356534635465, options), '234.2 Zo')
  a.strictEqual(byteSize(345234235342436356534635465, options), '345.2 Yo')
  a.strictEqual(byteSize(3234545234235342436356534635465, options), 3.2345452342353426e+30)
})

runner.test('iec_octet', function (t) {
  var options = { units: 'iec_octet' }
  a.strictEqual(byteSize(1000, options), '1000 o')
  a.strictEqual(byteSize(10000, options), '9.8 Kio')
  a.strictEqual(byteSize(34565346, options), '33.0 Mio')
  a.strictEqual(byteSize(56356534635465, options), '51.3 Tio')
  a.strictEqual(byteSize(42436356534635465, options), '37.7 Pio')
  a.strictEqual(byteSize(5342436356534635465, options), '4.6 Eio')
  a.strictEqual(byteSize(234235342436356534635465, options), '198.4 Zio')
  a.strictEqual(byteSize(345234235342436356534635465, options), '285.6 Yio')
  a.strictEqual(byteSize(3234545234235342436356534635465, options), 3.2345452342353426e+30)
  a.strictEqual(byteSize(9873234545234235342436356534635465, options), 9.873234545234235e+33)
})

runner.test('precision', function (t) {
  a.strictEqual(byteSize(10, { precision: 0 }), '10 B')
  a.strictEqual(byteSize(15, { precision: 2 }), '15 B')
  a.strictEqual(byteSize(1500, { precision: 0 }), '2 kB')
  a.strictEqual(byteSize(1500, { precision: 2 }), '1.50 kB')
  a.strictEqual(byteSize(1500000, { precision: 5 }), '1.50000 MB')
})
