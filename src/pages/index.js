//import Link from "next/link";
import axios from "axios";
import { Container } from "../../styles/index";
import Card from "../components/Card";
import Slider from "../Components/Slider";


export default function Home({data}) {
  return (
    <Container>
      <Slider
        Title={"For Rent"}
        Card={data?.map((item) => (
          <Card
            key={item?.id}
            Url={item?.photo}
            Title={item.title}
            Price={item.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "USD",
            })}
            Room={item.bedrooms}
            Bath={item.baths}
          />
        ))}
      />

      <Slider
        Title={"For Rent"}
        Card={data?.map((item) => (
          <Card
            key={item?.id}
            Url={item?.photo}
            Title={item?.title}
            Price={item?.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "USD",
            })}
            Room={item?.bedrooms}
            Bath={item?.baths}
          />
        ))}
      />
      
    </Container>
  );
}

export async function getStaticProps() {
  const response = await axios.get('http://localhost:5000/sale')
  
  return {
    props: {
     data: response.data
    },revalidate: 10,
  };
}