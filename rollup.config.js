export default [
  {
    input: 'index.js',
    output: {
      file: 'dist/index.js',
      format: 'umd',
      name: 'byteSize'
    },
    external: [],
    plugins: []
  },
  {
    input: 'index.js',
    output: {
      file: 'dist/index.cjs',
      format: 'cjs',
      exports: 'auto'
    },
    external: [],
    plugins: []
  }
]
