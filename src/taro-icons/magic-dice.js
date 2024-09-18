import React from 'react';
import { View, Text } from '@tarojs/components';
import Taro from '@tarojs/taro';

export const MagicDice = props => {
  const { color = 'currentColor', size = 24, ...otherProps } = props;

  return (
    <Text
      {...otherProps}
      style={{
        backgroundColor: color,
        mask:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2klEQVR4nM3UjU3bQBiH8f9NgDNBrxMQJiCdgGQDZwKUCepuYCaomaDpBL1OQDIBlwnwBulzfWNycW1SkJB4pJ8I/roPcJzeuQ87QIEWZ3tpgDlu4GV5ma5K0h1ajObQr5R0gXRzJekr8naIkq4RJS0RNJJDvzVuECQt4GXHPiGVPi9RIMiOr5GOtTjJod8TCqRaLBFkq7lFV5TkdSxdW8lW/pxD3hQP6NdIWmEm+3yBsb6h0iGHvEr/7nlXlK1mg0a2yiCb+eagRcrLrpdDXpD98fr9hJd0iRVqFEi/e5mZ7NgUW6SfcsjbY6gJCjziDo2Gt/IeUbaSGicDzPEDQ3XX7bGAl12fBNlKdvCylUQZOXTVCLITD8hbYYNfmKDR8fpHeNn5L6hR6pBDV3roFVIbXKLfb8xkK6lk+zxH3go1/ubQFWQn1nhCgX7p5qjxrUx9RtQhh7wa15hiqCuUOn3h8rY4ubc/QKrS8Luwg9dxz/MWSHnZJJ9zGKqU9B1596hkW1jpuE1bTFHKtjkqy2GsdFPQ8WthiVSQPWSPVJTNeoGZejm81BSN7D9qgkY2+1uUsm0LslUF2Qt2ksO5CtQoZbPdIMgeGnWm/xmgq0CLV/WaAd7Uuw/wB/Iybxln4fxcAAAAAElFTkSuQmCC') 0 0/100% 100% no-repeat",
        WebkitMask:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2klEQVR4nM3UjU3bQBiH8f9NgDNBrxMQJiCdgGQDZwKUCepuYCaomaDpBL1OQDIBlwnwBulzfWNycW1SkJB4pJ8I/roPcJzeuQ87QIEWZ3tpgDlu4GV5ma5K0h1ajObQr5R0gXRzJekr8naIkq4RJS0RNJJDvzVuECQt4GXHPiGVPi9RIMiOr5GOtTjJod8TCqRaLBFkq7lFV5TkdSxdW8lW/pxD3hQP6NdIWmEm+3yBsb6h0iGHvEr/7nlXlK1mg0a2yiCb+eagRcrLrpdDXpD98fr9hJd0iRVqFEi/e5mZ7NgUW6SfcsjbY6gJCjziDo2Gt/IeUbaSGicDzPEDQ3XX7bGAl12fBNlKdvCylUQZOXTVCLITD8hbYYNfmKDR8fpHeNn5L6hR6pBDV3roFVIbXKLfb8xkK6lk+zxH3go1/ubQFWQn1nhCgX7p5qjxrUx9RtQhh7wa15hiqCuUOn3h8rY4ubc/QKrS8Luwg9dxz/MWSHnZJJ9zGKqU9B1596hkW1jpuE1bTFHKtjkqy2GsdFPQ8WthiVSQPWSPVJTNeoGZejm81BSN7D9qgkY2+1uUsm0LslUF2Qt2ksO5CtQoZbPdIMgeGnWm/xmgq0CLV/WaAd7Uuw/wB/Iybxln4fxcAAAAAElFTkSuQmCC') 0 0/100% 100% no-repeat",
        '-webkit-mask':
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAB2klEQVR4nM3UjU3bQBiH8f9NgDNBrxMQJiCdgGQDZwKUCepuYCaomaDpBL1OQDIBlwnwBulzfWNycW1SkJB4pJ8I/roPcJzeuQ87QIEWZ3tpgDlu4GV5ma5K0h1ajObQr5R0gXRzJekr8naIkq4RJS0RNJJDvzVuECQt4GXHPiGVPi9RIMiOr5GOtTjJod8TCqRaLBFkq7lFV5TkdSxdW8lW/pxD3hQP6NdIWmEm+3yBsb6h0iGHvEr/7nlXlK1mg0a2yiCb+eagRcrLrpdDXpD98fr9hJd0iRVqFEi/e5mZ7NgUW6SfcsjbY6gJCjziDo2Gt/IeUbaSGicDzPEDQ3XX7bGAl12fBNlKdvCylUQZOXTVCLITD8hbYYNfmKDR8fpHeNn5L6hR6pBDV3roFVIbXKLfb8xkK6lk+zxH3go1/ubQFWQn1nhCgX7p5qjxrUx9RtQhh7wa15hiqCuUOn3h8rY4ubc/QKrS8Luwg9dxz/MWSHnZJJ9zGKqU9B1596hkW1jpuE1bTFHKtjkqy2GsdFPQ8WthiVSQPWSPVJTNeoGZejm81BSN7D9qgkY2+1uUsm0LslUF2Qt2ksO5CtQoZbPdIMgeGnWm/xmgq0CLV/WaAd7Uuw/wB/Iybxln4fxcAAAAAElFTkSuQmCC') 0 0/100% 100% no-repeat",
        width: Taro.pxTransform(size),
        height: Taro.pxTransform(size),
        display: 'inline-block'
      }}
    />
  );
};
