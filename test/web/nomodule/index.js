const $ = document.querySelector.bind(document)
const codeEl = $('code')

function deepEqual (a, b) {
  codeEl.textContent += a.toString() + '\n'
}
function strictEqual (a, b) {
  codeEl.textContent += a + '\n'
  console.assert(a === b)
}

{
  deepEqual(byteSize(1000), { value: '1.0', unit: 'kB' })
  deepEqual(byteSize(-1000), { value: '-1.0', unit: 'kB' })
  deepEqual(byteSize(10000), { value: '10.0', unit: 'kB' })
  deepEqual(byteSize(34565346), { value: '34.6', unit: 'MB' })
  deepEqual(byteSize(56356534635465), { value: '56.4', unit: 'TB' })
  deepEqual(byteSize(42436356534635465), { value: '42.4', unit: 'PB' })
  deepEqual(byteSize(5342436356534635465), { value: '5.3', unit: 'EB' })
  deepEqual(byteSize(234235342436356534635465), { value: '234.2', unit: 'ZB' })
  deepEqual(byteSize(345234235342436356534635465), { value: '345.2', unit: 'YB' })
  deepEqual(byteSize(3234545234235342436356534635465), { value: '3.2345452342353426e+30', unit: '' })
}

{
  const options = { units: 'iec' }
  deepEqual(byteSize(1000, options), { value: '1000', unit: 'B' })
  deepEqual(byteSize(10000, options), { value: '9.8', unit: 'KiB' })
  deepEqual(byteSize(-10000, options), { value: '-9.8', unit: 'KiB' })
  deepEqual(byteSize(34565346, options), { value: '33.0', unit: 'MiB' })
  deepEqual(byteSize(56356534635465, options), { value: '51.3', unit: 'TiB' })
  deepEqual(byteSize(42436356534635465, options), { value: '37.7', unit: 'PiB' })
  deepEqual(byteSize(5342436356534635465, options), { value: '4.6', unit: 'EiB' })
  deepEqual(byteSize(234235342436356534635465, options), { value: '198.4', unit: 'ZiB' })
  deepEqual(byteSize(345234235342436356534635465, options), { value: '285.6', unit: 'YiB' })
  deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
  deepEqual(byteSize(9873234545234235342436356534635465, options), { value: '9.873234545234235e+33', unit: '' })
}

{
  const options = { units: 'metric_octet' }
  deepEqual(byteSize(1000, options), { value: '1.0', unit: 'ko' })
  deepEqual(byteSize(10000, options), { value: '10.0', unit: 'ko' })
  deepEqual(byteSize(34565346, options), { value: '34.6', unit: 'Mo' })
  deepEqual(byteSize(-34565346, options), { value: '-34.6', unit: 'Mo' })
  deepEqual(byteSize(56356534635465, options), { value: '56.4', unit: 'To' })
  deepEqual(byteSize(42436356534635465, options), { value: '42.4', unit: 'Po' })
  deepEqual(byteSize(5342436356534635465, options), { value: '5.3', unit: 'Eo' })
  deepEqual(byteSize(234235342436356534635465, options), { value: '234.2', unit: 'Zo' })
  deepEqual(byteSize(345234235342436356534635465, options), { value: '345.2', unit: 'Yo' })
  deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
}

{
  const options = { units: 'iec_octet' }
  deepEqual(byteSize(1000, options), { value: '1000', unit: 'o' })
  deepEqual(byteSize(10000, options), { value: '9.8', unit: 'Kio' })
  deepEqual(byteSize(34565346, options), { value: '33.0', unit: 'Mio' })
  deepEqual(byteSize(56356534635465, options), { value: '51.3', unit: 'Tio' })
  deepEqual(byteSize(-56356534635465, options), { value: '-51.3', unit: 'Tio' })
  deepEqual(byteSize(42436356534635465, options), { value: '37.7', unit: 'Pio' })
  deepEqual(byteSize(5342436356534635465, options), { value: '4.6', unit: 'Eio' })
  deepEqual(byteSize(234235342436356534635465, options), { value: '198.4', unit: 'Zio' })
  deepEqual(byteSize(345234235342436356534635465, options), { value: '285.6', unit: 'Yio' })
  deepEqual(byteSize(3234545234235342436356534635465, options), { value: '3.2345452342353426e+30', unit: '' })
  deepEqual(byteSize(9873234545234235342436356534635465, options), { value: '9.873234545234235e+33', unit: '' })
}

{
  deepEqual(byteSize(10, { precision: 0 }), { value: '10', unit: 'B' })
  deepEqual(byteSize(15, { precision: 2 }), { value: '15', unit: 'B' })
  deepEqual(byteSize(1500, { precision: 0 }), { value: '2', unit: 'kB' })
  deepEqual(byteSize(1500, { precision: 2 }), { value: '1.50', unit: 'kB' })
  deepEqual(byteSize(-1500, { precision: 2 }), { value: '-1.50', unit: 'kB' })
  deepEqual(byteSize(1500000, { precision: 5 }), { value: '1.50000', unit: 'MB' })
}

{
  strictEqual(byteSize(1000).toString(), '1.0 kB')
  strictEqual(byteSize(-1000).toString(), '-1.0 kB')
}
