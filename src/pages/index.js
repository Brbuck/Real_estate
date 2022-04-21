import Link from "next/link";
import axios from "axios";

import { Container } from "../styles/pages/index";
import Card from "../components/Card";
import Slider from "../Components/Slider";

export default function Home({ propertyForSale, propertyForRent }) {
  return (
    <Container>
      <Slider
        Title={"For Sale"}
        Card={propertyForSale?.map((item) => (
          <Link href={`properties/for-sale/${item.id}`} key={item?.id}>
            <a>
              <Card
                Url={item?.coverphoto}
                Title={item.title}
                Price={item.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "USD",
                })}
                Room={item.bedrooms}
                Bath={item.baths}
                Garage={item?.garage}
              />
            </a>
          </Link>
        ))}
      />

      <Slider
        Title={"For Rent"}
        Card={propertyForRent?.map((item) => (
          <Link href={`properties/for-rent/${item.id}`} key={item?.id}>
            <a>
              <Card
                key={item?.id}
                Url={item?.coverphoto}
                Title={item?.description}
                Price={item?.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "USD",
                })}
                Room={item?.bedrooms}
                Bath={item?.baths}
                Garage={item?.garage}
              />
            </a>
          </Link>
        ))}
      />
    </Container>
  );
}

export async function getStaticProps() {
  const propertyForSale = await axios.get("http://localhost:5000/sale");
  const propertyForRent = await axios.get("http://localhost:5000/rent");

  return {
    props: {
      propertyForSale: propertyForSale.data,
      propertyForRent: propertyForRent.data,
    },
    revalidate: 100,
  };
}
