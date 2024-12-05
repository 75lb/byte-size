import byteSize from 'byte-size'
import { strict as a } from 'assert'

const [test, only, skip] = [new Map(), new Map(), new Map()]
const isNode13Plus = Number(process.versions.node.split('.')[0]) >= 13

test.set('metric 10', function () {
  const result = byteSize(10)
  a.equal(result.value, '10')
  a.equal(result.unit, 'B')
})
test.set('metric 1000', function () {
  const result = byteSize(1000)
  a.equal(result.value, '1')
  a.equal(result.unit, 'kB')
})
test.set('metric -1000', function () {
  const result = byteSize(-1000)
  a.equal(result.value, '-1')
  a.equal(result.unit, 'kB')
})
test.set('metric 10000', function () {
  const result = byteSize(10000)
  a.equal(result.value, '10')
  a.equal(result.unit, 'kB')
})
test.set('metric 34560000', function () {
  const result = byteSize(34560000)
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'MB')
})
test.set('metric 34560000000', function () {
  const result = byteSize(34560000000)
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'GB')
})
test.set('metric 34560000000000', function () {
  const result = byteSize(34560000000000)
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'TB')
})
test.set('metric 34560000000000000', function () {
  const result = byteSize(34560000000000000)
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'PB')
})
test.set('metric 34560000000000000000', function () {
  const result = byteSize(34560000000000000000)
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'EB')
})
test.set('metric 34560000000000000000000', function () {
  const result = byteSize(34560000000000000000000)
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'ZB')
})
test.set('metric 34560000000000000000000000', function () {
  const result = byteSize(34560000000000000000000000)
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'YB')
})
test.set('metric 34560000000000000000000000000', function () {
  const result = byteSize(34560000000000000000000000000)
  a.equal(result.value, '3.456e+28')
  a.equal(result.unit, '')
})
test.set('metric -34560000000000000000000000000', function () {
  const result = byteSize(-34560000000000000000000000000)
  a.equal(result.value, '-3.456e+28')
  a.equal(result.unit, '')
})

test.set('metric_octet 10', function () {
  const result = byteSize(10, { units: 'metric_octet' })
  a.equal(result.value, '10')
  a.equal(result.unit, 'o')
})
test.set('metric_octet 1000', function () {
  const result = byteSize(1000, { units: 'metric_octet' })
  a.equal(result.value, '1')
  a.equal(result.unit, 'ko')
})
test.set('metric_octet -1000', function () {
  const result = byteSize(-1000, { units: 'metric_octet' })
  a.equal(result.value, '-1')
  a.equal(result.unit, 'ko')
})
test.set('metric_octet 10000', function () {
  const result = byteSize(10000, { units: 'metric_octet' })
  a.equal(result.value, '10')
  a.equal(result.unit, 'ko')
})
test.set('metric_octet 34560000', function () {
  const result = byteSize(34560000, { units: 'metric_octet' })
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'Mo')
})
test.set('metric_octet 34560000000', function () {
  const result = byteSize(34560000000, { units: 'metric_octet' })
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'Go')
})
test.set('metric_octet 34560000000000', function () {
  const result = byteSize(34560000000000, { units: 'metric_octet' })
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'To')
})
test.set('metric_octet 34560000000000000', function () {
  const result = byteSize(34560000000000000, { units: 'metric_octet' })
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'Po')
})
test.set('metric_octet 34560000000000000000', function () {
  const result = byteSize(34560000000000000000, { units: 'metric_octet' })
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'Eo')
})
test.set('metric_octet 34560000000000000000000', function () {
  const result = byteSize(34560000000000000000000, { units: 'metric_octet' })
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'Zo')
})
test.set('metric_octet 34560000000000000000000000', function () {
  const result = byteSize(34560000000000000000000000, { units: 'metric_octet' })
  a.equal(result.value, '34.6')
  a.equal(result.unit, 'Yo')
})
test.set('metric_octet 34560000000000000000000000000', function () {
  const result = byteSize(34560000000000000000000000000, { units: 'metric_octet' })
  a.equal(result.value, '3.456e+28')
  a.equal(result.unit, '')
})
test.set('metric_octet -34560000000000000000000000000', function () {
  const result = byteSize(-34560000000000000000000000000, { units: 'metric_octet' })
  a.equal(result.value, '-3.456e+28')
  a.equal(result.unit, '')
})

test.set('iec 10', function () {
  const result = byteSize(10, { units: 'iec' })
  a.equal(result.value, '10')
  a.equal(result.unit, 'B')
})
test.set('iec 1000', function () {
  const result = byteSize(1000, { units: 'iec' })
  a.equal(result.value, '1,000')
  a.equal(result.unit, 'B')
})
test.set('iec -1000', function () {
  const result = byteSize(-1000, { units: 'iec' })
  a.equal(result.value, '-1,000')
  a.equal(result.unit, 'B')
})
test.set('iec 10000', function () {
  const result = byteSize(10000, { units: 'iec' })
  a.equal(result.value, '9.8')
  a.equal(result.unit, 'KiB')
})
test.set('iec 34560000', function () {
  const result = byteSize(34560000, { units: 'iec' })
  a.equal(result.value, '33')
  a.equal(result.unit, 'MiB')
})
test.set('iec 34560000000', function () {
  const result = byteSize(34560000000, { units: 'iec' })
  a.equal(result.value, '32.2')
  a.equal(result.unit, 'GiB')
})
test.set('iec 34560000000000', function () {
  const result = byteSize(34560000000000, { units: 'iec' })
  a.equal(result.value, '31.4')
  a.equal(result.unit, 'TiB')
})
test.set('iec 34560000000000000', function () {
  const result = byteSize(34560000000000000, { units: 'iec' })
  a.equal(result.value, '30.7')
  a.equal(result.unit, 'PiB')
})
test.set('iec 34560000000000000000', function () {
  const result = byteSize(34560000000000000000, { units: 'iec' })
  a.equal(result.value, '30')
  a.equal(result.unit, 'EiB')
})
test.set('iec 34560000000000000000000', function () {
  const result = byteSize(34560000000000000000000, { units: 'iec' })
  a.equal(result.value, '29.3')
  a.equal(result.unit, 'ZiB')
})
test.set('iec 34560000000000000000000000', function () {
  const result = byteSize(34560000000000000000000000, { units: 'iec' })
  a.equal(result.value, '28.6')
  a.equal(result.unit, 'YiB')
})
test.set('iec 34560000000000000000000000000', function () {
  const result = byteSize(34560000000000000000000000000, { units: 'iec' })
  a.equal(result.value, '3.456e+28')
  a.equal(result.unit, '')
})
test.set('iec -34560000000000000000000000000', function () {
  const result = byteSize(-34560000000000000000000000000, { units: 'iec' })
  a.equal(result.value, '-3.456e+28')
  a.equal(result.unit, '')
})

test.set('iec_octet 10', function () {
  const result = byteSize(10, { units: 'iec_octet' })
  a.equal(result.value, '10')
  a.equal(result.unit, 'o')
})
test.set('iec_octet 1000', function () {
  const result = byteSize(1000, { units: 'iec_octet' })
  a.equal(result.value, '1,000')
  a.equal(result.unit, 'o')
})
test.set('iec_octet -1000', function () {
  const result = byteSize(-1000, { units: 'iec_octet' })
  a.equal(result.value, '-1,000')
  a.equal(result.unit, 'o')
})
test.set('iec_octet 10000', function () {
  const result = byteSize(10000, { units: 'iec_octet' })
  a.equal(result.value, '9.8')
  a.equal(result.unit, 'Kio')
})
test.set('iec_octet 34560000', function () {
  const result = byteSize(34560000, { units: 'iec_octet' })
  a.equal(result.value, '33')
  a.equal(result.unit, 'Mio')
})
test.set('iec_octet 34560000000', function () {
  const result = byteSize(34560000000, { units: 'iec_octet' })
  a.equal(result.value, '32.2')
  a.equal(result.unit, 'Gio')
})
test.set('iec_octet 34560000000000', function () {
  const result = byteSize(34560000000000, { units: 'iec_octet' })
  a.equal(result.value, '31.4')
  a.equal(result.unit, 'Tio')
})
test.set('iec_octet 34560000000000000', function () {
  const result = byteSize(34560000000000000, { units: 'iec_octet' })
  a.equal(result.value, '30.7')
  a.equal(result.unit, 'Pio')
})
test.set('iec_octet 34560000000000000000', function () {
  const result = byteSize(34560000000000000000, { units: 'iec_octet' })
  a.equal(result.value, '30')
  a.equal(result.unit, 'Eio')
})
test.set('iec_octet 34560000000000000000000', function () {
  const result = byteSize(34560000000000000000000, { units: 'iec_octet' })
  a.equal(result.value, '29.3')
  a.equal(result.unit, 'Zio')
})
test.set('iec_octet 34560000000000000000000000', function () {
  const result = byteSize(34560000000000000000000000, { units: 'iec_octet' })
  a.equal(result.value, '28.6')
  a.equal(result.unit, 'Yio')
})
test.set('iec_octet 34560000000000000000000000000', function () {
  const result = byteSize(34560000000000000000000000000, { units: 'iec_octet' })
  a.equal(result.value, '3.456e+28')
  a.equal(result.unit, '')
})
test.set('iec_octet -34560000000000000000000000000', function () {
  const result = byteSize(-34560000000000000000000000000, { units: 'iec_octet' })
  a.equal(result.value, '-3.456e+28')
  a.equal(result.unit, '')
})

test.set('precision in a range where from=0 - ignore precision', function () {
  const result = byteSize(10)
  a.equal(result.value, '10')
  a.equal(result.unit, 'B')
})
test.set('precision in a range where from=0 - ignore precision 2', function () {
  const result = byteSize(10, { precision: 0 })
  a.equal(result.value, '10')
  a.equal(result.unit, 'B')
})
test.set('precision in a range where from=0 - ignore precision 3', function () {
  const result = byteSize(10, { precision: 1 })
  a.equal(result.value, '10')
  a.equal(result.unit, 'B')
})

test.set('precision', function () {
  const result = byteSize(1500, { precision: 0 })
  a.equal(result.value, '2')
  a.equal(result.unit, 'kB')
})
test.set('precision 2', function () {
  const result = byteSize(1500, { precision: 2 })
  a.equal(result.value, '1.5')
  a.equal(result.unit, 'kB')
})
test.set('precision 3', function () {
  const result = byteSize(-1500, { precision: 2 })
  a.equal(result.value, '-1.5')
  a.equal(result.unit, 'kB')
})
test.set('precision 4', function () {
  const result = byteSize(1500000, { precision: 5 })
  a.equal(result.value, '1.5')
  a.equal(result.unit, 'MB')
})

test.set('toString 1', function () {
  const result = byteSize(1000).toString()
  a.equal(result, '1 kB')
})
test.set('toString 2', function () {
  const result = byteSize(-1000).toString()
  a.equal(result, '-1 kB')
})

test.set('use custom table 1', function () {
  const customUnits = {
    test: [
      { from: 0   , to: 1e3 , unit: '' },
      { from: 1e3 , to: 1e6 , unit: 'K', long: 'thousand' },
      { from: 1e6 , to: 1e9 , unit: 'Mn', long: 'million' },
      { from: 1e9 , to: 1e12, unit: 'Bn', long: 'billion' }
    ]
  }
  const result = byteSize(100, { customUnits, units: 'test' })
  a.equal(result.value, '100')
  a.equal(result.unit, '')
})

test.set('use custom table 2', function () {
  const customUnits = {
    test: [
      { from: 0   , to: 1e3 , unit: '' },
      { from: 1e3 , to: 1e6 , unit: 'K', long: 'thousand' },
      { from: 1e6 , to: 1e9 , unit: 'Mn', long: 'million' },
      { from: 1e9 , to: 1e12, unit: 'Bn', long: 'billion' }
    ]
  }
  const result = byteSize(10000, { customUnits, units: 'test' })
  a.equal(result.value, '10')
  a.equal(result.unit, 'K')
})

test.set('custom table - no unit value specified, use default', function () {
  const customUnits = {
    test: [
      { from: 0   , to: 1e3 , unit: '' },
      { from: 1e3 , to: 1e6 , unit: 'K', long: 'thousand' },
      { from: 1e6 , to: 1e9 , unit: 'Mn', long: 'million' },
      { from: 1e9 , to: 1e12, unit: 'Bn', long: 'billion' }
    ]
  }
  const result = byteSize(100, { customUnits })
  a.equal(result.value, '100')
  a.equal(result.unit, 'B')
})

test.set('invalid units', function () {
  a.throws(
    () => byteSize(10, { units: 'broken' }),
    /invalid units/i
  )
})

test.set('options.toStringFn', async function () {
  const result = byteSize(2500, {
    toStringFn: function () { return 'test' }
  })
  const str = `${result}`
  a.equal(str, 'test')
})

test.set('byteSize.defaultOptions', async function () {
  const defaultOptions = {
    toStringFn: function () { return 'test' },
    customUnits: {
      test: [
        { from: 0, to: 5000, unit: 'test' }
      ]
    },
    units: 'test'
  }
  byteSize.defaultOptions(defaultOptions)
  const result = byteSize(2500)
  a.equal(result.toString(), 'test')
  a.equal(result.value, '2,500')
  a.equal(result.unit, 'test')
  byteSize.defaultOptions({})
})

test.set('byteSize.defaultOptions - override default units', async function () {
  const defaultOptions = {
    toStringFn: function () { return 'test' },
    customUnits: {
      test: [
        { from: 0, to: 5000, unit: 'test' }
      ]
    },
    units: 'iec'
  }
  byteSize.defaultOptions(defaultOptions)
  const result = byteSize(2500)
  a.equal(result.toString(), 'test')
  a.equal(result.value, '2.4')
  a.equal(result.unit, 'KiB')
  byteSize.defaultOptions({})
})

test.set('options.locale: metric 1000', function () {
  const result = byteSize(1000, { locale: 'de-DE' })
  a.equal(result.unit, 'kB')

  /* Intl is expected to work in Node v13+ or modern browser only */
  if (isNode13Plus) {
    a.equal(result.value, '1')
  } else {
    a.equal(result.value, '1')
  }

  return result.value
})

test.set('options.locale with precision 2', function () {
  const result = byteSize(1500, { locale: 'de-DE', precision: 2 })
  a.equal(result.unit, 'kB')

  /* Intl is expected to work in Node v13+ or modern browser only */
  if (isNode13Plus) {
    a.equal(result.value, '1,5')
  } else {
    a.equal(result.value, '1.5')
  }

  return result.value
})

test.set('small number with precision', function () {
  const result = byteSize(15.123456789, { precision: 3 })
  a.equal(result.value, '15.123')
  a.equal(result.unit, 'B')
})

export { test, only, skip }
