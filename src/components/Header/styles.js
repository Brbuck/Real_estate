import styled from "styled-components";
import Button from "../Button";

import { AiOutlineClose } from "react-icons/ai";

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

      @media (max-width: 720px) {
        margin: 10px 0px;
        padding: 10px 0px;
      }
    }

    @media (max-width: 720px) {
      margin: 10px 0px;
      padding: 8px 0px;
    }
    
  }

  @media (max-width: 720px) {
    display: ${({menu}) => (menu ? 'flex' : 'none')};
    width: 100%;
    height: 100vh;
    flex-direction: column;
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;

    background-color: #fff;
  }

  .menu-responsive {
    display: none;

    @media (max-width: 720px) {
      display: inline;
    
    }
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

export const CloseMenu = styled(AiOutlineClose)`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
