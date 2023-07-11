import React from "react";
import styled from "styled-components";

const Header = styled.header`
  display: block;
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
  </Header>
);
