import styled from "styled-components";
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";

export const Wrapper = styled.div`
  width: 100%;
  height: auto;
  margin-top: 30px;
`;
export const Container = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  padding: 15px 0px;
  overflow-x: auto;
`;

export const Row = styled.div`
  width: auto;
  height: 330px;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  transition: all ease 0.5s;

  @media (max-width: 1120px) {
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    scroll-behavior: smooth;
  }
`;

export const BoxButton = styled.div`
  width: auto;
  height: auto;
  margin-top: 15px;
  margin-left: calc(100% - 120px);
`;
export const LeftButton = styled(AiOutlineLeft)`
  width: 30px;
  height: 25px;
  color: #d478ff;
  border: 1px solid #d478ff;
  border-radius: 4px;
  cursor: pointer;
`;

export const RightButton = styled(AiOutlineRight)`
  width: 30px;
  height: 25px;
  color: #d478ff;
  border: 1px solid #d478ff;
  border-radius: 4px;
  margin-left: 15px;
  cursor: pointer;
`;
