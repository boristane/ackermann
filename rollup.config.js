
import buble from 'rollup-plugin-buble';
import progress from 'rollup-plugin-progress';

export default {
  input: './index.js',
  output: {
    name: 'ackermann',
    file: './dist/ackermann.js',
    format: 'umd',
  },
  plugins: [
    buble({
      objectAssign: 'Object.assign',
    }),
    progress(),
  ],
};
