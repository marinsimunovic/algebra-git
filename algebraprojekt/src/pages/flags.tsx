import { useState } from "react";

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

const Contact = () => {
  const [countryName, setCountryName] = useState(""); // Dodajemo stanje za ime države
  const [countryData, setCountryData] = useState<CountryDataType | undefined>(
    undefined
  );
  const [countryFlag, setCountryFlag] = useState<string | undefined>(undefined);

  const getData = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/name/${countryName}`
      );
      if (!response.ok) {
        throw new Error("Country not found");
      }
      const data = await response.json();
      if (data.length > 0) {
        setCountryData(data[0]);
        setCountryFlag(data[0]?.flags.png);
      } else {
        setCountryData(undefined);
        setCountryFlag(undefined);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <h1>Search for Countries</h1>
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)} // Spremamo vrijednost unesenog imena države u stanje countryName
        />
        <button onClick={getData} key="getDataButton">
          Get the flag
        </button>
      </div>
      {countryData && countryFlag && (
        <>
          <img src={countryFlag} alt="" />
          <div>
            <p>Country: {countryData.name.common}</p>
            <p>Population: {countryData.population}</p>
            {/* Ostale informacije o državi možete dodati ovdje */}
          </div>
        </>
      )}
    </>
  );
};

export default Contact;
