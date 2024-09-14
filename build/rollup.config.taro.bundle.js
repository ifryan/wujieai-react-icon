import babel from "@rollup/plugin-babel";
import path from "path";
import copy from "rollup-plugin-copy";
import pkg from "../package.json";

const resolveFile = function(filePath) {
  return path.join(__dirname, "..", filePath);
};

export default {
  // input: "src/taro-icons.js",
  input: "src/taro-icons/index.js",
  output: [{ file: pkg.taro, format: "cjs" }],
  external: ["@tarojs/components", "@tarojs/taro"],
  plugins: [
    copy({
      // targets: [
      //   {
      //     src: resolveFile("src/taro-icons.d.ts"),
      //     dest: resolveFile("dist/taro.d.ts"),
      //   },
      // ],
      targets: [
        {
          src: resolveFile("src/taro-icons/index.d.ts"),
          dest: resolveFile("dist/taro.d.ts"),
        },
      ],
    }),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
