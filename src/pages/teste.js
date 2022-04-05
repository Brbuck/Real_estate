import { baseUrl, fetchApi } from "../services/api";
import { Data } from "../services/Data";
import Card from "../components/Card";
import Slider from "../Components/Slider";
export default function teste() {
  return (
    <div>
      <Slider
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
      />
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
