import Head from "next/head";
import { useRouter } from "next/router";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const Container = styled.div`
  width: 100%;
  height: 100%;
  //max-width: 1080px;
  margin: 0px auto;
  padding: 20px;

  background-color: #f9f9f9;
`;

export default function Layout({ children }) {
  const router = useRouter();

  const showSearch = router.pathname === "/" ? true : false;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {showSearch && <Search />}
      <Container>
        <main >{children}</main>
      </Container>
     <Footer />
    </>
  );
}
