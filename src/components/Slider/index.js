import React, { useState } from "react";

import {
  Container,
  Row,
  BoxButton,
  LeftButton,
  RightButton,
  Wrapper,
} from "./styles";

function Slider({ Card, Title }) {
  const [scrollX, setScrollX] = useState(0);

  function LeftArrow() {
    let x = scrollX + 500;
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  function RightArrow() {
    let x = scrollX - 500;
    let list = Card.length * 280;
    if (window.innerWidth - list > x) {
      x = window.innerWidth - list;
    }
    setScrollX(x);
    console.log(list);
  }

  return (
    <Wrapper>
      <h1>{Title}</h1>
      <Container>
        <Row style={{ marginLeft: scrollX }}>{Card}</Row>
      </Container>
      <BoxButton>
        <LeftButton onClick={LeftArrow} />
        <RightButton onClick={RightArrow} />
      </BoxButton>
    </Wrapper>
  );
}

export default Slider;
