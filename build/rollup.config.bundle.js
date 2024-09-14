import babel from "@rollup/plugin-babel";
import path from "path";
import copy from "rollup-plugin-copy";
import pkg from "../package.json";

const resolveFile = function(filePath) {
  return path.join(__dirname, "..", filePath);
};

export default {
  input: ["src/icons.js", "src/taro-icons.js"],
  output: {
    dir: pkg.distDir || "dist", // 设置输出目录，可以根据你的项目结构进行调整
    format: "es",
    entryPoints: ["src/icons.js", "src/taro-icons.js"],
  },
  external: ["react", "prop-types"],
  plugins: [
    copy({
      targets: [
        { src: resolveFile("src/icons.d.ts"), dest: resolveFile("dist/") },
      ],
    }),
    babel({
      exclude: "node_modules/**",
    }),
  ],
};
