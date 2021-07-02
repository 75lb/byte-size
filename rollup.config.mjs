export default [
  {
    input: 'index.mjs',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'byteSize'
    },
    external: [],
    plugins: []
  },
  {
    input: 'index.mjs',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto'
    },
    external: [],
    plugins: []
  }
]
