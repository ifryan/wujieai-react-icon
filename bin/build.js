/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require("path");
const fs = require("fs");
const format = require("prettier-eslint");
const processSvg = require("./processSvg");
const { parseName, svgToBase64 } = require("./utils");
const defaultStyle = process.env.npm_package_config_style || "stroke";
const { getAttrs, getElementCode, getTaroElementCode } = require("./template");
const icons = require("../src/data.json");

const rootDir = path.join(__dirname, "..");

// where icons code in
const srcDir = path.join(rootDir, "src");
const iconsDir = path.join(rootDir, "src/icons");
const iconsTaroDir = path.join(rootDir, "src/taro-icons");

// generate icons.js and icons.d.ts file
const generateIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
    fs.mkdirSync(iconsDir);
  } else if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir);
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  `;

  fs.writeFileSync(path.join(rootDir, "src", "icons.js"), "", "utf-8");
  fs.writeFileSync(
    path.join(rootDir, "src", "icons.d.ts"),
    initialTypeDefinitions,
    "utf-8"
  );
};
const generateTaroIconsIndex = () => {
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir);
    fs.mkdirSync(iconsTaroDir);
  } else if (!fs.existsSync(iconsTaroDir)) {
    fs.mkdirSync(iconsTaroDir);
  }

  const initialTypeDefinitions = `/// <reference types="react" />
  import { ComponentType, SVGAttributes } from 'react';

  interface Props extends SVGAttributes<SVGElement> {
    color?: string;
    size?: string | number;
  }

  type Icon = ComponentType<Props>;
  `;

  fs.writeFileSync(path.join(rootDir, "src", "taro-icons.js"), "", "utf-8");
  fs.writeFileSync(
    path.join(rootDir, "src", "taro-icons.d.ts"),
    initialTypeDefinitions,
    "utf-8"
  );
};

// generate attributes code
const attrsToString = (attrs, style) => {
  console.log("style: ", style);
  return Object.keys(attrs)
    .map((key) => {
      // should distinguish fill or stroke
      if (key === "width" || key === "height" || key === style) {
        return key + "={" + attrs[key] + "}";
      }
      if (key === "otherProps") {
        return "{...otherProps}";
      }
      return key + '="' + attrs[key] + '"';
    })
    .join(" ");
};

// generate icon code separately
const generateIconCode = async ({ name }) => {
  const names = parseName(name, defaultStyle);
  const location = path.join(rootDir, "src/svg", `${names.name}.svg`);
  const destination = path.join(rootDir, "src/icons", `${names.name}.js`);

  const code = fs.readFileSync(location);
  const svgCode = await processSvg(code);

  const ComponentName = names.componentName;
  const element = getElementCode(
    ComponentName,
    attrsToString(getAttrs(names.style), names.style),
    svgCode
  );
  const component = format({
    text: element,
    eslintConfig: {
      extends: "airbnb",
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: "flow",
    },
  });

  fs.writeFileSync(destination, component, "utf-8");

  console.log("Successfully built", ComponentName);
  return {
    ComponentName,
    name: names.name,
  };
};
const generateTaroIconCode = async ({ name }) => {
  const names = parseName(name, defaultStyle);
  const location = path.join(rootDir, "src/svg", `${names.name}.svg`);
  const destination = path.join(rootDir, "src/taro-icons", `${names.name}.js`);
  const code = fs.readFileSync(location);
  const svgCode = await processSvg(code);
  const { xmlns, width, height, viewBox } = getAttrs(names.style);
  const base64Image = await svgToBase64(
    `<svg xmlns="${xmlns}" width="${width}" height="${height}" viewBox="${viewBox}" fill="currentColor">${svgCode}</svg>`
  );
  const ComponentName = names.componentName;

  const element = getTaroElementCode(`${ComponentName}`, base64Image);
  const component = format({
    text: element,
    eslintConfig: {
      extends: "airbnb",
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: "flow",
    },
  });

  fs.writeFileSync(destination, component, "utf-8");

  console.log("Successfully Taro built", ComponentName);
  return {
    ComponentName,
    name: names.name,
  };
};
// append export code to icons.js
const appendToIconsIndex = ({ ComponentName, name }) => {
  const exportString = `export { ${ComponentName} } from './icons/${name}';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, "src", "icons.js"),
    exportString,
    "utf-8"
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, "src", "icons.d.ts"),
    exportTypeString,
    "utf-8"
  );
};
const appendToTaroIconsIndex = ({ ComponentName, name }) => {
  console.log(ComponentName, name, 2);
  const exportString = `export { ${ComponentName} } from './taro-icons/${name}';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, "src", "taro-icons.js"),
    exportString,
    "utf-8"
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n  export const Taro${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, "src", "taro-icons.d.ts"),
    exportTypeString,
    "utf-8"
  );
};

generateIconsIndex();
// generateTaroIconsIndex();

Object.keys(icons)
  .map((key) => icons[key])
  .forEach(({ name }) => {
    generateIconCode({ name }).then(({ ComponentName, name }) => {
      appendToIconsIndex({ ComponentName, name });
    });
    // generateTaroIconCode({ name }).then(({ ComponentName, name }) => {
    //   appendToTaroIconsIndex({ ComponentName, name });
    // });
  });
