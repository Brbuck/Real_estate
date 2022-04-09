import styled from "styled-components";

import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";

export const Container = styled.div`
  //width: 100%;
  //max-width: 260px;
  width: 260px;
  margin-left: 10px;
  height: 320px;
  box-shadow: 2px 2px 5px 0px #ccc;
  color: #7b7672;
  cursor: pointer;

  img {
    width: 100%;
    height: 150px;
  }

  div {
    padding: 15px 10px;

    h3 {
      margin-bottom: 15px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    div {
      display: flex;
      align-items: center;
      margin-top: 15px;
      padding: 0;

      span {
        display: flex;
        align-items: center;
        color: #0089ff;

        &:nth-child(2) {
          margin-left: 20px;
        }
      }
    }
  }
`;

export const BathIcon = styled(FaBath)`
  width: 18px;
  height: 18px;
  color: #0089ff;
  margin-left: 8px;
`;

export const RoomIcon = styled(FaBed)`
  width: 18px;
  height: 18px;
  color: #0089ff;
  margin-left: 8px;
`;
