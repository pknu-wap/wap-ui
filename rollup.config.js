import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const extensions = ["js", "jsx", "ts", "tsx", "mjs"];
const pkg = require("./package.json");

function setUpRollup({ output }) {
  return {
    external: ["react", "react-dom"],
    input: "./packages/index.ts",
    output,
    plugins: [
      nodeResolve({ extensions }),
      babel({
        exclude: "node_modules/**",
        extensions,
        include: ["packages/**/*"],
        babelHelpers: "bundled",
      }),
      commonjs({ include: "node_modules/**" }),
      peerDepsExternal(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  };
}

export default [
  setUpRollup({
    output: {
      file: pkg.main,
      format: "cjs",
    },
  }),
  setUpRollup({
    output: {
      file: pkg.module,
      format: "esm",
    },
  }),
];
