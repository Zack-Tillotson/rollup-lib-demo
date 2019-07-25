import babel from 'rollup-plugin-babel';

module.exports = {
  input: [
    'src/index.js',
    'src/Comp1.js',
    'src/Comp2.js',
  ],
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  external: [
    'react',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};