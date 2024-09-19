const getAttrs = (style) => {
  const baseAttrs = {
    xmlns: "http://www.w3.org/2000/svg",
    width: "size",
    height: "size",
    viewBox: "0 0 48 48",
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
    const { color="currentColor", size=24, ...otherProps } = props;
    return (
      <svg ${attrs}>
        ${svgCode}
      </svg>
    )
  };
`;

const getTaroElementCode = (ComponentName, base64Image) => `
  import React from 'react';
  import { Text } from '@tarojs/components'
  import Taro from '@tarojs/taro'

  export const ${ComponentName} = (props) => {
    const { color="currentColor", size=24, ...otherProps } = props;
   
    return (
      <Text
        {...otherProps}
        style={{
          backgroundColor: color,
          mask: "url('${base64Image}') 0 0/100% 100% no-repeat",
          WebkitMask: "url('${base64Image}') 0 0/100% 100% no-repeat",
          '-webkit-mask': "url('${base64Image}') 0 0/100% 100% no-repeat",
          width: Taro.pxTransform(size),
          height: Taro.pxTransform(size),
          display: "inline-block",
        }}
      />
    )
  };
`;

module.exports = { getAttrs, getElementCode, getTaroElementCode };
