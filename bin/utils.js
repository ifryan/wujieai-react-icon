const upperCamelCase = require("uppercamelcase");

const svg2img = require("svg2img");

const parseName = (name, defaultStyle) => {
  const nameSlices = name.split("-");
  const style = nameSlices[nameSlices.length - 1];
  return {
    name,
    componentName: upperCamelCase(name),
    style: style === "fill" || style === "stroke" ? style : defaultStyle,
  };
};

const svgToBase64 = async (svgContent) => {
  let base64Image = "";
  await svg2img(svgContent, { format: "png" }, function(error, buffer) {
    if (error) {
      console.error(error);
      return;
    }
    base64Image = buffer.toString("base64");
  });
  return `data:image/png;base64,${base64Image}`;
};

module.exports = {
  parseName,
  svgToBase64,
};
