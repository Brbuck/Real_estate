import styled from "styled-components";

import Button from "../../components/Button";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { AiOutlineAreaChart } from "react-icons/ai";
import { IoMdCar } from "react-icons/io";

export const Container = styled.div`
  width: 100%;
  max-width: 1080px;
  margin: 0px auto;
  padding: 20px;
`;

export const Title = styled.h1`
  padding: 0px 20px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }

  @media (max-width: 540px) {
    font-size: 1.2rem;
  }
`;

export const WrapperInfo = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px 20px;

  display: flex;
  justify-content: space-between;
  align-items: start;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const DetailPropertie = styled.div`
  flex: 2;
  margin-bottom: 20px;

  h3 {
    margin: 15px 0px;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 15px;
    padding: 0;

    span {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #0089ff;
    }
  }
`;
export const AreaIcon = styled(AiOutlineAreaChart)`
  width: 30px;
  height: 30px;
  color: #0089ff;
  margin: 5px 12px 5px 0px;
`;

export const BathIcon = styled(FaBath)`
  width: 30px;
  height: 30px;
  color: #0089ff;
  margin: 5px 12px;
`;

export const RoomIcon = styled(FaBed)`
  width: 30px;
  height: 30px;
  color: #0089ff;
  margin: 5px 12px;
`;

export const GarageIcon = styled(IoMdCar)`
  width: 30px;
  height: 30px;
  color: #0089ff;
  margin: 5px 12px;
`;

export const Contact = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100%;
  max-width: 300px;
  height: 100%;
  min-height: 200px;
  background-color: #fff;
  box-shadow: 2px 2px 10px 5px #ccc;
  padding: 10px 20px;

  div {
    display: flex;
    align-items: center;

    img {
      width: 25px;
      height: 25px;
    }

    h4 {
      margin-left: 15px;
    }
  }
`;

export const EditButton = styled(Button)`
  background-color: #d478ff;
  color: #fffbf4;

  border-radius: 25px;
`;

export const PropertyFeatures = styled(WrapperInfo)`
  background-color: #f8f8f8;
  div {
    flex: 2;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    h3 {
      width: 180px;
      margin-bottom: 20px;
      border-bottom: 2px solid #d478ff;
    }

    span {
      text-transform: capitalize;
      line-height: 25px;
      color: #3b3f45;
    }
  }
  div {
    flex: 1;
    p {
      font-size: 1rem;
      line-height: 20px;
      color: #3b3f45;
    }
  }
`;
