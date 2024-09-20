const upperCamelCase = require("uppercamelcase");
const svg64 = require("svg64");

const parseName = (name, defaultStyle) => {
  const nameSlices = name.split("-");
  const style = nameSlices[nameSlices.length - 1];
  return {
    name,
    componentName: upperCamelCase(name),
    style: style === "fill" || style === "stroke" ? style : defaultStyle,
  };
};

const svgToBase64 = (svgContent) => {
  return svg64.svg64(svgContent);
};

module.exports = {
  parseName,
  svgToBase64,
};
