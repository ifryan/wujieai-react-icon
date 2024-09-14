import React from "react";
import styled from "styled-components";

import { version } from "../../package.json";

const Header = styled.header`
  display: block;
  margin-bottom: 12px;
  span {
    font-weight: normal;
    font-size: 14px;
    margin-left: 12px;
  }
`;

export default () => (
  <Header>
    <h1>
      无界AI Icons<span>(双击名称复制组件)</span>
    </h1>
    <div>当前版本：{version}</div>
  </Header>
);
