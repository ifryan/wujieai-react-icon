const { svgToBase64 } = require("./utils");

const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "size",
    height: "size",
    viewBox: "0 0 24 24",
  };
  const fillAttrs = {
    fill: "color",
    otherProps: "...otherProps",
  };
  const strokeAttrs = {
    fill: "none",
    stroke: "color",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    otherProps: "...otherProps",
  };
  return Object.assign(
    {},
    baseAttrs,
    style === "fill" ? fillAttrs : strokeAttrs
  );
};

const getElementCode = (ComponentName, attrs, svgCode) => `
  import React from 'react';
  export const ${ComponentName} = (props) => {
    const { color="currentColor", size="24", ...otherProps } = props;
    return (
      <svg ${attrs}>
        ${svgCode}
      </svg>
    )
  };
`;

const getTaroElementCode = (ComponentName, base64Image) => `
  import React from 'react';
  import { View, Text } from '@tarojs/components'




  export const ${ComponentName} = (props) => {
    const { color="currentColor", size="24", ...otherProps } = props;
    const styles = Taro.StyleSheet.create({
      maskedView: {
        backgroundColor: color,
        mask: "url('${base64Image}') 0 0/100% 100% no-repeat",
        WebkitMask: "url('${base64Image}') 0 0/100% 100% no-repeat",
        "-webkit-mask": "url('${base64Image}') 0 0/100% 100% no-repeat",
        width: size,
        height: size,
        display: "inline-block",
      },
    });
    return (
      <View>
        <Text
         style={styles.maskedView} />
      </View>
    )
  };
`;

module.exports = { getAttrs, getElementCode, getTaroElementCode };
