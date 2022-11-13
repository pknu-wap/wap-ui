import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// rollup-plugin-terser: 생성된 es번들을 최소화하기 위한 플러그인
import { terser } from 'rollup-plugin-terser';

const extensions = ['js', 'jsx', 'ts', 'tsx', 'mjs'];
import pkg from './package.json';

export default {
  external: ['react', 'react-dom'],
  input: './packages/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    nodeResolve({ extensions }),
    babel({
      exclude: 'node_modules/**',
      extensions,
      include: ['packages/**/*'],
      babelHelpers: 'bundled',
    }),
    commonjs({ include: 'node_modules/**' }),
    peerDepsExternal(),
    typescript({ tsconfig: './tsconfig.json', sourceMap: true }),
    terser(),
  ],
};
