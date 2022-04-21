import { Container, BathIcon, GarageIcon,RoomIcon } from "./styles";

export default function Card({ Title, Url, Price, Bath, Room, Garage}) {
  return (
    <Container >
      <img src={Url} />
      <div>
        <h3>{Title}</h3>
        <span>{Price}</span>
        <div>
          <span>{Room}<RoomIcon/></span>
          <span>{Bath}<BathIcon/></span>
          <span>{Garage}<GarageIcon/></span>
        </div>
      </div>
    </Container>
  );
}
