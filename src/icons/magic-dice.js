import React from "react";
export const MagicDice = (props) => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.544 2.857l-7.474.638 7.584 5.329 7.574-1.13-7.684-4.837zm-.346 1.909a3.372 3.372 0 011.313.319c.16.076.3.161.411.25a.91.91 0 01.241.268c.047.089.059.172.034.246-.025.074-.086.137-.18.185a1.036 1.036 0 01-.363.097 2.335 2.335 0 01-.494-.006 3.391 3.391 0 01-1.068-.303c-.323-.154-.557-.34-.652-.519-.096-.178-.043-.333.145-.43.143-.075.356-.112.613-.107z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.732 4.021l-2.77 10.28 7.708 6.63L12.814 9.7 4.732 4.021zm5.185 5.485c.094 0 .189.02.282.063.136.06.266.163.382.302.117.139.218.311.297.508a2.792 2.792 0 01.18 1.304c-.047.439-.2.81-.426 1.035-.227.223-.508.28-.782.158a1.088 1.088 0 01-.381-.302 1.91 1.91 0 01-.298-.508 2.79 2.79 0 01-.18-1.304c.04-.362.15-.68.317-.907.167-.227.381-.35.609-.35zM4.01 11.879c.094 0 .189.022.282.063.136.06.266.164.382.303.117.139.218.311.297.508a2.79 2.79 0 01.18 1.304 2.18 2.18 0 01-.146.598 1.313 1.313 0 01-.28.437.743.743 0 01-.373.209.666.666 0 01-.409-.05 1.088 1.088 0 01-.382-.303 1.91 1.91 0 01-.297-.508 2.79 2.79 0 01-.18-1.304c.04-.362.15-.68.317-.908.167-.226.38-.349.609-.349z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.038 8.786l-8.06 1.203-3.12 11.154 7.752-2.118 3.428-10.24zm-1.849 1.495a.558.558 0 01.512.276c.134.217.165.539.088.894a2.362 2.362 0 01-.5 1.002c-.243.285-.529.473-.795.521-.266.049-.49-.046-.624-.263-.134-.217-.165-.539-.088-.894.077-.356.257-.716.5-1.002.138-.162.29-.294.448-.387a.978.978 0 01.46-.147zm-4.58.711a.558.558 0 01.512.276c.134.217.165.538.088.894a2.361 2.361 0 01-.5 1.001c-.242.286-.528.474-.795.522-.266.049-.49-.046-.624-.263-.133-.217-.165-.539-.088-.894.077-.356.257-.716.5-1.002.138-.162.291-.294.448-.387a.976.976 0 01.46-.147zm2.553 4.945a.558.558 0 01.511.276c.134.217.165.539.088.894a2.361 2.361 0 01-.5 1.002c-.242.285-.528.473-.794.521-.266.049-.491-.046-.625-.263-.133-.217-.165-.539-.088-.894a2.36 2.36 0 01.5-1.002c.138-.162.291-.294.448-.387a.977.977 0 01.46-.146zm-4.69 1.3a.558.558 0 01.512.275c.134.217.165.539.088.895a2.361 2.361 0 01-.5 1c-.12.142-.252.261-.388.35-.136.09-.275.149-.406.173a.566.566 0 01-.624-.264c-.134-.217-.166-.539-.089-.894.078-.356.257-.716.5-1.002.138-.162.291-.294.449-.386a.977.977 0 01.459-.147z"
      ></path>
    </svg>
  );
};
export const TaroMagicDice = async (props) => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <View>
      <Text
        style={{
          backgroundColor: color,
          mask:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2klEQVR4nM3UjU3bQBiH8f9NgDNBrxMQJiCdgGQDZwKUCepuYCaomaDpBL1OQDIBlwnwBulzfWNycW1SkJB4pJ8I/roPcJzeuQ87QIEWZ3tpgDlu4GV5ma5K0h1ajObQr5R0gXRzJekr8naIkq4RJS0RNJJDvzVuECQt4GXHPiGVPi9RIMiOr5GOtTjJod8TCqRaLBFkq7lFV5TkdSxdW8lW/pxD3hQP6NdIWmEm+3yBsb6h0iGHvEr/7nlXlK1mg0a2yiCb+eagRcrLrpdDXpD98fr9hJd0iRVqFEi/e5mZ7NgUW6SfcsjbY6gJCjziDo2Gt/IeUbaSGicDzPEDQ3XX7bGAl12fBNlKdvCylUQZOXTVCLITD8hbYYNfmKDR8fpHeNn5L6hR6pBDV3roFVIbXKLfb8xkK6lk+zxH3go1/ubQFWQn1nhCgX7p5qjxrUx9RtQhh7wa15hiqCuUOn3h8rY4ubc/QKrS8Luwg9dxz/MWSHnZJJ9zGKqU9B1596hkW1jpuE1bTFHKtjkqy2GsdFPQ8WthiVSQPWSPVJTNeoGZejm81BSN7D9qgkY2+1uUsm0LslUF2Qt2ksO5CtQoZbPdIMgeGnWm/xmgq0CLV/WaAd7Uuw/wB/Iybxln4fxcAAAAAElFTkSuQmCC') 0 0/100% 100% no-repeat",
          WebkitMask:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2klEQVR4nM3UjU3bQBiH8f9NgDNBrxMQJiCdgGQDZwKUCepuYCaomaDpBL1OQDIBlwnwBulzfWNycW1SkJB4pJ8I/roPcJzeuQ87QIEWZ3tpgDlu4GV5ma5K0h1ajObQr5R0gXRzJekr8naIkq4RJS0RNJJDvzVuECQt4GXHPiGVPi9RIMiOr5GOtTjJod8TCqRaLBFkq7lFV5TkdSxdW8lW/pxD3hQP6NdIWmEm+3yBsb6h0iGHvEr/7nlXlK1mg0a2yiCb+eagRcrLrpdDXpD98fr9hJd0iRVqFEi/e5mZ7NgUW6SfcsjbY6gJCjziDo2Gt/IeUbaSGicDzPEDQ3XX7bGAl12fBNlKdvCylUQZOXTVCLITD8hbYYNfmKDR8fpHeNn5L6hR6pBDV3roFVIbXKLfb8xkK6lk+zxH3go1/ubQFWQn1nhCgX7p5qjxrUx9RtQhh7wa15hiqCuUOn3h8rY4ubc/QKrS8Luwg9dxz/MWSHnZJJ9zGKqU9B1596hkW1jpuE1bTFHKtjkqy2GsdFPQ8WthiVSQPWSPVJTNeoGZejm81BSN7D9qgkY2+1uUsm0LslUF2Qt2ksO5CtQoZbPdIMgeGnWm/xmgq0CLV/WaAd7Uuw/wB/Iybxln4fxcAAAAAElFTkSuQmCC') 0 0/100% 100% no-repeat",
          width: size,
          height: size,
          display: "inline-block",
        }}
      />
    </View>
  );
};
