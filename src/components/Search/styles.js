import styled from "styled-components";
import Button from "../Button";

export const Container = styled.div`
  width: 100%;
  height: 450px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  background: url("https://cdn.pixabay.com/photo/2017/02/11/11/27/nyc-2057534_1280.jpg")
    no-repeat center center/cover;
  background-blend-mode: color;
  background-color: rgba(0, 0, 0, 0.2);

  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #FFF;

    @media (max-width: 520px) {
      font-size: 1.6rem;
    }
  }
`;

export const WrapperSearch = styled.form`
  width: 100%;
  max-width: 805px;
  height: auto;
  padding: 30px 20px;

  display: flex;
  background-color: rgba(0, 0, 0, 0.5);

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const WrapperRadio = styled.div`
  width: 100%;
  max-width: 180px;

  display: flex;

  @media (max-width: 720px) {
    max-width: 100%;
    margin: 6px 0px;
  }

  input {
    display: none;

    &:checked + label {
      background-color: #d478ff;
      color: #fff;
    }
  }

  input + label {
    width: 100%;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;

    cursor: pointer;
    background-color: #fff;
    color: #666;

    &:nth-child(2) {
      border-right: 1px solid #ccc;
    }
  }
`;

export const WrapperSelect = styled.div`
  width: 100%;
  max-width: 180px;
  margin-left: 15px;

  @media (max-width: 720px) {
    max-width: 100%;
    margin: 6px 0px;
  }

  select {
    width: 100%;
    height: 35px;

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    padding: 6px;

    cursor: pointer;
    background-color: #fff;
    color: #666;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 180px;
  height: 35px;
  font-size: 12px;
  margin-left: 15px;
  padding: 6px;

  background-color: #fff;
  color: #111;

  @media (max-width: 720px) {
    max-width: 100%;
    margin: 6px 0px;
  }
`;

export const SearchButton = styled(Button)`
  max-width: 180px;
  margin-left: 15px;
  border-radius: 0px;

  background-color: #d478ff;
  color: #fff;

  @media (max-width: 720px) {
    max-width: 100%;
    margin: 6px 0px;
  }
`;
