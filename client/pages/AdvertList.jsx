import axios from 'axios';
import { useEffect, useState } from 'react';
import { AdvertCard } from './AdvertCard';

export function AdvertList(props) {
  const [advertList, setAdvertList] = useState([]);
 
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/advert')
      .then((response) => {
        setAdvertList(response.data.data);
      })
      .catch((error) => console.error("Fetching movie list failed:", error));
  }, []);

  return (
    <div className=" regColor row row-cols-1 row-cols-md-2 row-cols-xl-4  g-4 p-3 ">
      {advertList.length === 0 ? (
        <p>Loading...</p>
      ) : (
        advertList.map((advert) => ( 
        <AdvertCard
          key={advert.id}
          id={advert.id}
          title={advert.title}
          description={advert.description}
          photo={advert.photo}
          price={advert.price}
        />
      ))
    )}


    </div>
  );
}
