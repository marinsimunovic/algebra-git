import { useState, useEffect } from "react";
import Arrow from "../assets/arrow.svg";
type Berry = {
  name: string;
  url: string;
  img: string;
};
const Pokemon = () => {
  const [berries, setBerries] = useState<Berry[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const fetchBerries = () => {
      fetch("https://pokeapi.co/api/v2/berry/")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          const berryPromises = data.results.map((berry: Berry) => {
            return fetch(berry.url)
              .then((response) => {
                if (!response.ok) {
                  throw new Error("Network response was not ok");
                }
                return response.json();
              })
              .then((berryData) => {
                const berryName = berryData.name;
                const imgUrl = `https://pokeapi.co/api/v2/item/${berryData.id}/`;
                return fetch(imgUrl)
                  .then((imgUrlResponse) => {
                    if (!imgUrlResponse.ok) {
                      throw new Error("Network response for image was not ok");
                    }
                    return imgUrlResponse.json();
                  })
                  .then((imgUrlData) => {
                    const img = imgUrlData.sprites.default;
                    return {
                      name: berryName,
                      url: berry.url,
                      img: img,
                    };
                  });
              });
          });
          Promise.all(berryPromises)
            .then((berryData) => {
              setBerries(berryData);
              setLoading(false);
            })
            .catch((error) => {
              console.error("Error fetching berries:", error);
              setLoading(false);
            });
        })
        .catch((error) => {
          console.error("Error fetching berries:", error);
          setLoading(false);
        });
    };
    fetchBerries();
  }, []);
  return (
    <>
      <a href="/vjezbe">
        <img className="back" src={Arrow} alt="arrow" />
      </a>
      <h1>Pokemon Berries</h1>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {berries.map((berry) => (
            <li>
              <div style={{ display: `flex`, alignItems: `center` }}>
                <img
                  src={berry.img}
                  alt={berry.name}
                  style={{
                    width: "50px",
                    height: "50px",
                  }}
                />
                <span>{berry.name}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
export default Pokemon;
