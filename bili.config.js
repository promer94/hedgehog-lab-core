module.exports = {
  input: './src/index.ts',
  bundleNodeModules: true,
  output: {
    format: ['esm-min'],
    target: 'browser',
    sourceMapExcludeSources: true
  },
  externals: ['babel-template'],
  plugins: {
    'node-polyfills': {},
  },
}
