import styled from "styled-components";

import Button from "../Button";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Modal = styled.form`
  width: 100%;
  max-width: 500px;
  height: 400px;
  padding: 15px 30px;

  display: flex;
  flex-direction: column;

  background-color: #fff;
`;

export const Input = styled.input`
  width: 100%;
  height: 35px;
  border: 1px solid #555;
  padding: 5px;
  margin: 8px 0px;
  border-radius: 3px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  border: 1px solid #555;
  padding: 5px;
  margin: 8px 0px;
  border-radius: 3px;
`;

export const ClosedButton = styled(AiOutlineClose)`
  width: 30px;
  height: 30px;
  margin-left: calc(100% - 30px);
  cursor: pointer;
`;

export const ClosedModalButton = styled(Button)`
  background-color: #663e79;
  color: #FFF;
`;
