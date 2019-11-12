import Tom from './node_modules/test-object-model/dist/index.mjs'
import byteSize from './index.mjs'
import getAssert from './node_modules/isomorphic-assert/index.mjs'

const tom = new Tom('byte-size')

async function getTom () {
  const a = await getAssert()

  tom.test('metric 10', function () {
    const result = byteSize(10)
    a.equal(result.value, '10')
    a.equal(result.unit, 'B')
  })
  tom.test('metric 1000', function () {
    const result = byteSize(1000)
    a.equal(result.value, '1.0')
    a.equal(result.unit, 'kB')
  })
  tom.test('metric -1000', function () {
    const result = byteSize(-1000)
    a.equal(result.value, '-1.0')
    a.equal(result.unit, 'kB')
  })
  tom.test('metric 10000', function () {
    const result = byteSize(10000)
    a.equal(result.value, '10.0')
    a.equal(result.unit, 'kB')
  })
  tom.test('metric 34560000', function () {
    const result = byteSize(34560000)
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'MB')
  })
  tom.test('metric 34560000000', function () {
    const result = byteSize(34560000000)
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'GB')
  })
  tom.test('metric 34560000000000', function () {
    const result = byteSize(34560000000000)
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'TB')
  })
  tom.test('metric 34560000000000000', function () {
    const result = byteSize(34560000000000000)
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'PB')
  })
  tom.test('metric 34560000000000000000', function () {
    const result = byteSize(34560000000000000000)
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'EB')
  })
  tom.test('metric 34560000000000000000000', function () {
    const result = byteSize(34560000000000000000000)
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'ZB')
  })
  tom.test('metric 34560000000000000000000000', function () {
    const result = byteSize(34560000000000000000000000)
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'YB')
  })
  tom.test('metric 34560000000000000000000000000', function () {
    const result = byteSize(34560000000000000000000000000)
    a.equal(result.value, '3.456e+28')
    a.equal(result.unit, '')
  })
  tom.test('metric -34560000000000000000000000000', function () {
    const result = byteSize(-34560000000000000000000000000)
    a.equal(result.value, '-3.456e+28')
    a.equal(result.unit, '')
  })

  tom.test('metric_octet 10', function () {
    const result = byteSize(10, { units: 'metric_octet' })
    a.equal(result.value, '10')
    a.equal(result.unit, 'o')
  })
  tom.test('metric_octet 1000', function () {
    const result = byteSize(1000, { units: 'metric_octet' })
    a.equal(result.value, '1.0')
    a.equal(result.unit, 'ko')
  })
  tom.test('metric_octet -1000', function () {
    const result = byteSize(-1000, { units: 'metric_octet' })
    a.equal(result.value, '-1.0')
    a.equal(result.unit, 'ko')
  })
  tom.test('metric_octet 10000', function () {
    const result = byteSize(10000, { units: 'metric_octet' })
    a.equal(result.value, '10.0')
    a.equal(result.unit, 'ko')
  })
  tom.test('metric_octet 34560000', function () {
    const result = byteSize(34560000, { units: 'metric_octet' })
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'Mo')
  })
  tom.test('metric_octet 34560000000', function () {
    const result = byteSize(34560000000, { units: 'metric_octet' })
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'Go')
  })
  tom.test('metric_octet 34560000000000', function () {
    const result = byteSize(34560000000000, { units: 'metric_octet' })
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'To')
  })
  tom.test('metric_octet 34560000000000000', function () {
    const result = byteSize(34560000000000000, { units: 'metric_octet' })
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'Po')
  })
  tom.test('metric_octet 34560000000000000000', function () {
    const result = byteSize(34560000000000000000, { units: 'metric_octet' })
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'Eo')
  })
  tom.test('metric_octet 34560000000000000000000', function () {
    const result = byteSize(34560000000000000000000, { units: 'metric_octet' })
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'Zo')
  })
  tom.test('metric_octet 34560000000000000000000000', function () {
    const result = byteSize(34560000000000000000000000, { units: 'metric_octet' })
    a.equal(result.value, '34.6')
    a.equal(result.unit, 'Yo')
  })
  tom.test('metric_octet 34560000000000000000000000000', function () {
    const result = byteSize(34560000000000000000000000000, { units: 'metric_octet' })
    a.equal(result.value, '3.456e+28')
    a.equal(result.unit, '')
  })
  tom.test('metric_octet -34560000000000000000000000000', function () {
    const result = byteSize(-34560000000000000000000000000, { units: 'metric_octet' })
    a.equal(result.value, '-3.456e+28')
    a.equal(result.unit, '')
  })

  tom.test('iec 10', function () {
    const result = byteSize(10, { units: 'iec' })
    a.equal(result.value, '10')
    a.equal(result.unit, 'B')
  })
  tom.test('iec 1000', function () {
    const result = byteSize(1000, { units: 'iec' })
    a.equal(result.value, '1000')
    a.equal(result.unit, 'B')
  })
  tom.test('iec -1000', function () {
    const result = byteSize(-1000, { units: 'iec' })
    a.equal(result.value, '-1000')
    a.equal(result.unit, 'B')
  })
  tom.test('iec 10000', function () {
    const result = byteSize(10000, { units: 'iec' })
    a.equal(result.value, '9.8')
    a.equal(result.unit, 'KiB')
  })
  tom.test('iec 34560000', function () {
    const result = byteSize(34560000, { units: 'iec' })
    a.equal(result.value, '33.0')
    a.equal(result.unit, 'MiB')
  })
  tom.test('iec 34560000000', function () {
    const result = byteSize(34560000000, { units: 'iec' })
    a.equal(result.value, '32.2')
    a.equal(result.unit, 'GiB')
  })
  tom.test('iec 34560000000000', function () {
    const result = byteSize(34560000000000, { units: 'iec' })
    a.equal(result.value, '31.4')
    a.equal(result.unit, 'TiB')
  })
  tom.test('iec 34560000000000000', function () {
    const result = byteSize(34560000000000000, { units: 'iec' })
    a.equal(result.value, '30.7')
    a.equal(result.unit, 'PiB')
  })
  tom.test('iec 34560000000000000000', function () {
    const result = byteSize(34560000000000000000, { units: 'iec' })
    a.equal(result.value, '30.0')
    a.equal(result.unit, 'EiB')
  })
  tom.test('iec 34560000000000000000000', function () {
    const result = byteSize(34560000000000000000000, { units: 'iec' })
    a.equal(result.value, '29.3')
    a.equal(result.unit, 'ZiB')
  })
  tom.test('iec 34560000000000000000000000', function () {
    const result = byteSize(34560000000000000000000000, { units: 'iec' })
    a.equal(result.value, '28.6')
    a.equal(result.unit, 'YiB')
  })
  tom.test('iec 34560000000000000000000000000', function () {
    const result = byteSize(34560000000000000000000000000, { units: 'iec' })
    a.equal(result.value, '3.456e+28')
    a.equal(result.unit, '')
  })
  tom.test('iec -34560000000000000000000000000', function () {
    const result = byteSize(-34560000000000000000000000000, { units: 'iec' })
    a.equal(result.value, '-3.456e+28')
    a.equal(result.unit, '')
  })

  tom.test('iec_octet 10', function () {
    const result = byteSize(10, { units: 'iec_octet' })
    a.equal(result.value, '10')
    a.equal(result.unit, 'o')
  })
  tom.test('iec_octet 1000', function () {
    const result = byteSize(1000, { units: 'iec_octet' })
    a.equal(result.value, '1000')
    a.equal(result.unit, 'o')
  })
  tom.test('iec_octet -1000', function () {
    const result = byteSize(-1000, { units: 'iec_octet' })
    a.equal(result.value, '-1000')
    a.equal(result.unit, 'o')
  })
  tom.test('iec_octet 10000', function () {
    const result = byteSize(10000, { units: 'iec_octet' })
    a.equal(result.value, '9.8')
    a.equal(result.unit, 'Kio')
  })
  tom.test('iec_octet 34560000', function () {
    const result = byteSize(34560000, { units: 'iec_octet' })
    a.equal(result.value, '33.0')
    a.equal(result.unit, 'Mio')
  })
  tom.test('iec_octet 34560000000', function () {
    const result = byteSize(34560000000, { units: 'iec_octet' })
    a.equal(result.value, '32.2')
    a.equal(result.unit, 'Gio')
  })
  tom.test('iec_octet 34560000000000', function () {
    const result = byteSize(34560000000000, { units: 'iec_octet' })
    a.equal(result.value, '31.4')
    a.equal(result.unit, 'Tio')
  })
  tom.test('iec_octet 34560000000000000', function () {
    const result = byteSize(34560000000000000, { units: 'iec_octet' })
    a.equal(result.value, '30.7')
    a.equal(result.unit, 'Pio')
  })
  tom.test('iec_octet 34560000000000000000', function () {
    const result = byteSize(34560000000000000000, { units: 'iec_octet' })
    a.equal(result.value, '30.0')
    a.equal(result.unit, 'Eio')
  })
  tom.test('iec_octet 34560000000000000000000', function () {
    const result = byteSize(34560000000000000000000, { units: 'iec_octet' })
    a.equal(result.value, '29.3')
    a.equal(result.unit, 'Zio')
  })
  tom.test('iec_octet 34560000000000000000000000', function () {
    const result = byteSize(34560000000000000000000000, { units: 'iec_octet' })
    a.equal(result.value, '28.6')
    a.equal(result.unit, 'Yio')
  })
  tom.test('iec_octet 34560000000000000000000000000', function () {
    const result = byteSize(34560000000000000000000000000, { units: 'iec_octet' })
    a.equal(result.value, '3.456e+28')
    a.equal(result.unit, '')
  })
  tom.test('iec_octet -34560000000000000000000000000', function () {
    const result = byteSize(-34560000000000000000000000000, { units: 'iec_octet' })
    a.equal(result.value, '-3.456e+28')
    a.equal(result.unit, '')
  })

  tom.test('precision in a range where from=0 - ignore precision', function () {
    const result = byteSize(10)
    a.equal(result.value, '10')
    a.equal(result.unit, 'B')
  })
  tom.test('precision in a range where from=0 - ignore precision 2', function () {
    const result = byteSize(10, { precision: 0 })
    a.equal(result.value, '10')
    a.equal(result.unit, 'B')
  })
  tom.test('precision in a range where from=0 - ignore precision 3', function () {
    const result = byteSize(10, { precision: 1 })
    a.equal(result.value, '10')
    a.equal(result.unit, 'B')
  })

  tom.test('precision', function () {
    const result = byteSize(1500, { precision: 0 })
    a.equal(result.value, '2')
    a.equal(result.unit, 'kB')
  })
  tom.test('precision 2', function () {
    const result = byteSize(1500, { precision: 2 })
    a.equal(result.value, '1.50')
    a.equal(result.unit, 'kB')
  })
  tom.test('precision 3', function () {
    const result = byteSize(-1500, { precision: 2 })
    a.equal(result.value, '-1.50')
    a.equal(result.unit, 'kB')
  })
  tom.test('precision 4', function () {
    const result = byteSize(1500000, { precision: 5 })
    a.equal(result.value, '1.50000')
    a.equal(result.unit, 'MB')
  })

  tom.test('toString 1', function () {
    const result = byteSize(1000).toString()
    a.equal(result, '1.0 kB')
  })
  tom.test('toString 2', function () {
    const result = byteSize(-1000).toString()
    a.equal(result, '-1.0 kB')
  })

  tom.test('use custom table 1', function () {
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

  tom.test('use custom table 2', function () {
    const customUnits = {
      test: [
        { from: 0   , to: 1e3 , unit: '' },
        { from: 1e3 , to: 1e6 , unit: 'K', long: 'thousand' },
        { from: 1e6 , to: 1e9 , unit: 'Mn', long: 'million' },
        { from: 1e9 , to: 1e12, unit: 'Bn', long: 'billion' }
      ]
    }
    const result = byteSize(10000, { customUnits, units: 'test' })
    a.equal(result.value, '10.0')
    a.equal(result.unit, 'K')
  })

  tom.test('custom table - no unit value specified, use default', function () {
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

  tom.test('invalid units', function () {
    a.throws(
      () => byteSize(10, { units: 'broken' }),
      /invalid units/i
    )
  })

  tom.test('options.toStringFn', async function () {
    const result = byteSize(2500, {
      toStringFn: function () { return 'test' }
    })
    const str = `${result}`
    a.equal(str, 'test')
  })

  tom.test('byteSize.defaultOptions', async function () {
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
    a.equal(result.value, '2500')
    a.equal(result.unit, 'test')
  })

  tom.test('byteSize.defaultOptions - override default units', async function () {
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
  })

  return tom
}

export default getTom()
