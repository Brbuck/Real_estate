import { useRouter } from "next/router";
import styled from "styled-components";

import Header from "./header"
import Search from './Search'

const Container = styled.div`
  width: 100%;
  //max-width: 1080px;
  margin: 0px auto;
  padding: 20px;
`;

export default function Layout({ children }) {
  const router = useRouter();
  
  const showSearch = router.pathname === "/" ? true : false;

  return (
    <>
    <Header />
    {showSearch && <Search />}
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
}
