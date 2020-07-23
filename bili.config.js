module.exports = {
  input: './src/index.ts',
  bundleNodeModules: true,
  output: {
    moduleName: 'HedgehogLabCore',
    target: 'browser',
    sourceMapExcludeSources: true,
    format: ["umd-min", 'esm-min', 'cjs-min']
  },
  plugins: {
    'node-polyfills': {},
  },
}
