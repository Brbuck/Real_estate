import { Data } from "../services/Data";
import Swiper from "../components/Swiper";

import {
  Container,
  BathIcon,
  Contact,
  DetailPropertie,
  EditButton,
  PropertyFeatures,
  RoomIcon,
  Title,
  WrapperInfo,
} from "../styles/teste";

export default function teste() {
  return (
    <>
      <Swiper Data={Data} />
      <Container>
        <Title>
          A melhor localização da cidade, acesso fácil a rodovia, shopping
        </Title>
        <WrapperInfo>
          <DetailPropertie>
            <span>
              Rua Luiz Figueiredo - Vila nossa senhora do bonfin, São José dos
              Campos - SP
            </span>
            <h3>R$ 250.000.00,00</h3>
            <div>
              <span>
                <RoomIcon />3
              </span>
              <span>
                <BathIcon />2
              </span>
            </div>
          </DetailPropertie>
          <Contact>
            <div>
              <img
                src="https://bayut-production.s3.eu-central-1.amazonaws.com/image/27681814/9c7b944fa4344803a4cc318dd6160c78"
                alt="#"
              />
              <h4>LAIS G. ACCORSI </h4>
            </div>
            <EditButton>Contato</EditButton>
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
            <p>
              A melhor localização da cidade, acesso fácil a rodovia, shopping e
              principal avenida. Condominio de prédio novo, com área comum
              moderna e completa. Duplex moderno, luxuoso e inteirinho mobiliado
              com armários embutidos, a suíte debaixo esta ligada ao quarto
              podendo ser adptada como closet ou quarto.
            </p>
          </div>
        </PropertyFeatures>
      </Container>
    </>
  );
}

/* export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=10`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=10&categoryExternalID=3`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
    revalidate: 10000,
  };
} */
