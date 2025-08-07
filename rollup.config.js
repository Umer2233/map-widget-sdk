import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "MapWidgetSdk",
  },
  plugins: [
    resolve(),
    commonjs(),
    postcss({
      inject: true,
    }),
  ],
  external: [],
};
