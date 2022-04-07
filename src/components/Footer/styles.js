import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 50px;
  padding: 20px;
  background-color: #d478ff;

  div{
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  span {
    margin: 10px 0px;
  }

  div {
    span {
      font-size: 20px;
      margin-left: 10px;
      cursor: pointer;
    }
  }

  span {
    @media (max-width: 565px) {
      font-size: 0.9rem;
    }
  }
`;
