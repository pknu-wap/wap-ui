// @rollup/plugin-babel: rollup에서 babel을 사용 할 수 있게 해주는 플러그인
import babel from '@rollup/plugin-babel';
// @rollup/plugin-commonjs: CommonJS 모듈을 ES6로 변환시켜주는 롤업 플러그인
import commonjs from '@rollup/plugin-commonjs';
// @rollup/plugin-node-resolve: node_modules에서 써드파티 모듈을 사용하는 패키지
import { nodeResolve } from '@rollup/plugin-node-resolve';
// rollup-plugin-peer-deps-external: peerDependency로 설치된 라이브러리의 코드를 번들리에그인 포함시키지 않고, import로 불러와 사용할 수 있게 해주는 플러그인
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
// rollup-plugin-terser: 생성된 es번들을 최소화하기 위한 플러그인
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

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
