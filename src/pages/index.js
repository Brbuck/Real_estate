//import Link from "next/link";

import { Container } from "../../styles/index";
import Card from "../components/Card";
import Slider from "../Components/Slider";

import { Data } from "../services/Data";

export default function Home() {
  return (
    <Container>
      <Slider
        Title={"For Rent"}
        Card={Data?.map((item) => (
          <Card
            key={item?.id}
            Url={item?.photo}
            Title={item.title}
            Price={item.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "USD",
            })}
            Room={item.rooms}
            Bath={item.baths}
          />
        ))}
      />

      <Slider
        Title={"For Rent"}
        Card={Data?.map((item) => (
          <Card
            key={item?.id}
            Url={item?.photo}
            Title={item.title}
            Price={item.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "USD",
            })}
            Room={item.rooms}
            Bath={item.baths}
          />
        ))}
      />
      
    </Container>
  );
}
