import { useState } from "react";
import { useRouter } from "next/router";

import Swiper from "../../../components/Swiper";
import ContactModal from "../../../components/ContactModal";

import {
  AreaIcon,
  Container,
  BathIcon,
  Contact,
  DetailPropertie,
  EditButton,
  GarageIcon,
  PropertyFeatures,
  RoomIcon,
  Title,
  WrapperInfo,
} from "../../../styles/pages/property";

export default function Sale({ id }) {
  const [showModal, setShowModal] = useState(false);

  function ShowContactModal() {
    setShowModal(!showModal);
  }

  const { isFallback } = useRouter();

  if (isFallback) {
    return <p>Carregando...</p>;
  }

  return (
    <>
     {showModal ? <ContactModal id={id} ShowContactModal={ShowContactModal} /> : null}
      <Swiper Data={id?.photos} />
      <Container onClick={ShowContactModal}>
      
        <Title>{id?.description}</Title>
        <WrapperInfo>
          <DetailPropertie>
            <span>{id?.address}</span>
            <h3>
              {id?.price.toLocaleString("pt-br", {
                style: "currency",
                currency: "USD",
              })}
            </h3>
            <div>
              <span>
                <AreaIcon />
                {id?.area}
              </span>
              <span>
                <RoomIcon />
                {id?.bedrooms}
              </span>
              <span>
                <BathIcon />
                {id?.baths}
              </span>
              <span>
                <GarageIcon />
                {id?.garage}
              </span>
            </div>
          </DetailPropertie>
          <Contact>
            <div>
              <img src={id?.agency.logo} alt="#" />
              <h4>{id?.agency.name}</h4>
            </div>
            <EditButton onClick={ShowContactModal}>Contact</EditButton>
          </Contact>
        </WrapperInfo>
        <PropertyFeatures>
          <div>
            <h3>Property Features</h3>
            <span>Pool</span>
            <span>Gym</span>
            <span>Air conditioning</span>
            <span>Desk</span>
          </div>
          <div>
            <p>{id?.description}</p>
          </div>
        </PropertyFeatures>
      </Container>
    </>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("http://localhost:5000/sale");
  const data = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = data.map((item) => ({
    params: { id: item.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:5000/sale/${params.id}`);
  const data = await res.json();

  // Pass post data to the page via props
  return {
    props: {
      id: data,
    },
    revalidate: 100,
  };
}
