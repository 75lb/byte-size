const byteSize = require('byte-size')
const a = require('assert').strict

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

module.exports = { test, only, skip }
