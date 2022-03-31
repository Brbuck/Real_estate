import styled from "styled-components";

import Header from "./header"

const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0px auto;
  padding: 20px;
`;

export default function Layout({ children }) {
  return (
    <>
    <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
}
