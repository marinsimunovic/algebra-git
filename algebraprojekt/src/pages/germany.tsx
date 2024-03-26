import { useEffect, useState } from "react";

type CountryDataType = {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  population: number;
  region: string;
  fifa: string;
  flag: string;
};

const Germany = () => {
  const [countryData, setCountryData] = useState<CountryDataType[]>([]);

  const getData = () => {
    fetch(`https://restcountries.com/v3.1/name/germany`)
      .then((res) => {
        return res.json();
      })
      .then((data: CountryDataType[]) => {
        console.log(data);
        setCountryData(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {countryData.map((country, index) => (
        <div key={index}>
          <h2>{country.name.common}</h2>
          <img src={country.flags.png} alt={country.name.common} />
          <h2>{country.population}</h2>
          <h2>{country.region}</h2>
          <h3>{country.fifa}</h3>
          <h3>{country.flag}</h3>
        </div>
      ))}
    </>
  );
};

export default Germany;
