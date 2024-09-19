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
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHElEQVR4nO3W4U3bQBiH8f9NgJmg7gSECUgnINnAmQBlgrobmAlqJmg6Qa8TkEyAMwHeIH1Ob624rkPbD/GBeo/0E8EYxa/vwHF64/23A2RoEb2XBljgFrmsXKarlHSPFtFyGFZIukC4uFLSR/Tbo5F0g0bSCl6Rchi2wS28pCVy2bF3CIXXK2TwsuMbhGMtJs1h2DMyhFqs4GWrcYeuRlKuY+HcUrZyk+XQb4ZHDKslrTGXvb7AqT6h1EQ59Cv1+57vamSrsUUtWyUvu/Pbn1qEctn5Z8+hn5f9cQ77ilzSFdaokCF8n8vMZcdm2CF8PXsO/Q4Y6xIZnnCPWuNb7QGNbCUqnD2HrgW+YKzuvAOWyGXnB162EnvkspVoZM6eQ1cFL3vjR/RbY4tvuESt4/lPyGU//4AKhSbKoStc9DVCW1xh2HfMZStRyvb5Av3WqDBJDl1e9sYbPCPDsHBxjU5vtdB7NJooh34VbjDDWNco9OsDrd8Op373LA0HCJUafxbskeu45/stEcplN2GyHMYqJH1GvweUsi1W6riNdpihkG3DRhPmcKpwUV7Hjw0rhLzsIg8INbK7vsRcE+fwUjPUsv9Il6hld/8OhWxbedmqeNkDbNIc/lSGCoXsbm/hZRfdKHJ/M0BXhhavqn8Z4FWWBohdGiB2aYDYpQFilwaIXRogdmmA2KUBYpcGiF0aIHZpgNilAWL35gf4AY6hbzGhvyZQAAAAAElFTkSuQmCC') 0 0/100% 100% no-repeat",
        WebkitMask:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHElEQVR4nO3W4U3bQBiH8f9NgJmg7gSECUgnINnAmQBlgrobmAlqJmg6Qa8TkEyAMwHeIH1Ob624rkPbD/GBeo/0E8EYxa/vwHF64/23A2RoEb2XBljgFrmsXKarlHSPFtFyGFZIukC4uFLSR/Tbo5F0g0bSCl6Rchi2wS28pCVy2bF3CIXXK2TwsuMbhGMtJs1h2DMyhFqs4GWrcYeuRlKuY+HcUrZyk+XQb4ZHDKslrTGXvb7AqT6h1EQ59Cv1+57vamSrsUUtWyUvu/Pbn1qEctn5Z8+hn5f9cQ77ilzSFdaokCF8n8vMZcdm2CF8PXsO/Q4Y6xIZnnCPWuNb7QGNbCUqnD2HrgW+YKzuvAOWyGXnB162EnvkspVoZM6eQ1cFL3vjR/RbY4tvuESt4/lPyGU//4AKhSbKoStc9DVCW1xh2HfMZStRyvb5Av3WqDBJDl1e9sYbPCPDsHBxjU5vtdB7NJooh34VbjDDWNco9OsDrd8Op373LA0HCJUafxbskeu45/stEcplN2GyHMYqJH1GvweUsi1W6riNdpihkG3DRhPmcKpwUV7Hjw0rhLzsIg8INbK7vsRcE+fwUjPUsv9Il6hld/8OhWxbedmqeNkDbNIc/lSGCoXsbm/hZRfdKHJ/M0BXhhavqn8Z4FWWBohdGiB2aYDYpQFilwaIXRogdmmA2KUBYpcGiF0aIHZpgNilAWL35gf4AY6hbzGhvyZQAAAAAElFTkSuQmCC') 0 0/100% 100% no-repeat",
        '-webkit-mask':
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACHElEQVR4nO3W4U3bQBiH8f9NgJmg7gSECUgnINnAmQBlgrobmAlqJmg6Qa8TkEyAMwHeIH1Ob624rkPbD/GBeo/0E8EYxa/vwHF64/23A2RoEb2XBljgFrmsXKarlHSPFtFyGFZIukC4uFLSR/Tbo5F0g0bSCl6Rchi2wS28pCVy2bF3CIXXK2TwsuMbhGMtJs1h2DMyhFqs4GWrcYeuRlKuY+HcUrZyk+XQb4ZHDKslrTGXvb7AqT6h1EQ59Cv1+57vamSrsUUtWyUvu/Pbn1qEctn5Z8+hn5f9cQ77ilzSFdaokCF8n8vMZcdm2CF8PXsO/Q4Y6xIZnnCPWuNb7QGNbCUqnD2HrgW+YKzuvAOWyGXnB162EnvkspVoZM6eQ1cFL3vjR/RbY4tvuESt4/lPyGU//4AKhSbKoStc9DVCW1xh2HfMZStRyvb5Av3WqDBJDl1e9sYbPCPDsHBxjU5vtdB7NJooh34VbjDDWNco9OsDrd8Op373LA0HCJUafxbskeu45/stEcplN2GyHMYqJH1GvweUsi1W6riNdpihkG3DRhPmcKpwUV7Hjw0rhLzsIg8INbK7vsRcE+fwUjPUsv9Il6hld/8OhWxbedmqeNkDbNIc/lSGCoXsbm/hZRfdKHJ/M0BXhhavqn8Z4FWWBohdGiB2aYDYpQFilwaIXRogdmmA2KUBYpcGiF0aIHZpgNilAWL35gf4AY6hbzGhvyZQAAAAAElFTkSuQmCC') 0 0/100% 100% no-repeat",
        width: Taro.pxTransform(size),
        height: Taro.pxTransform(size),
        display: 'inline-block'
      }}
    />
  );
};
