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
    dir: pkg.distDir || "dist",
    format: "es",
    entryFileNames: "[name].js",
    chunkFileNames: "[name]-[hash].js",
    assetFileNames: "[name]-[hash][extname]",
    sourcemap: true,
    // 为不同的输入文件设置不同的库名称
    globals: {
      "src/icons.js": "wujieai-react-icon",
      "src/taro-icons.js": "wujieai-taro-icon",
    },
    exports: "named",
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
