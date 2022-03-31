import styled from "styled-components";
import Button from "../Button";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 60px;
  padding: 10px 50px;
  background-color: #fff;

  @media (max-width: 720px) {
    justify-content: space-between;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    a {
      color: #888;
      padding: 6px 15px;
      margin-left: 15px;
      transition: 0.2s;
      &:hover {
        border-bottom: 2px solid #d478ff;
      }
    }
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Logo = styled.div``;

export const LogInButton = styled(Button)`
  max-width: 160px;
  background-color: #d478ff;
  color: #fff;


  @media (max-width: 720px) {
    display: none;
  }
`;

export const MenuButton = styled(Button)`
  display: none;
  max-width: 160px;
  background-color: #d478ff;
  color: #fff;


  @media (max-width: 720px) {
    display: block;
  }

  @media (max-width: 520px) {
    max-width: 100px;
  }
`;
