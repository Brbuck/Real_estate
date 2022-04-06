import { Data } from "../services/Data";
import Swiper from '../components/Swiper'

export default function teste() {
  return (
    <div>
      {/* <Slider
        Card={Data?.map((item) => (
          <Card
            key={item?.id}
            Url={item?.photo}
            Title={item.title}
            Price={item.price}
            Room={item.rooms}
            Bath={item.baths}
          />
        ))}
      /> */}
      <Swiper Data={Data} />
    </div>
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
