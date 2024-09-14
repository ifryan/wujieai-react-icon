import React from "react";
import styled from "styled-components";
import * as icons from "./react-icons";
import Header from "./components/Header";
import IconWrapper from "./components/IconWrapper";

const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  justify-items: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0 0 24px 0;
  list-style: none;
  li span {
    cursor: pointer;
  }
`;

class List extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          {Object.keys(icons)
            .filter((it) => !it.startsWith("Taro"))
            .map((key, index) => {
              const Icon = icons[key];
              return (
                <li key={index}>
                  <IconWrapper>
                    <Icon />
                    <span
                      onDoubleClick={() => handleCopyIcon(`<${key} />`)}
                      onContextMenu={(e) => {
                        e.preventDefault();
                        handleCopyIcon(`<Taro${key} />`);
                      }}
                    >
                      {key}
                    </span>
                  </IconWrapper>
                </li>
              );
            })}
        </Container>
      </div>
    );
  }
}

// copy icon
function handleCopyIcon(str) {
  const el = document.createElement("textarea");
  el.value = str;
  el.setAttribute("readonly", "");
  el.style.position = "absolute";
  el.style.left = "-9999px";
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
}

export default List;
