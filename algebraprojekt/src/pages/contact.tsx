import { useEffect, useState } from "react";

type CountryType = {
  flags: {
    png: string;
  };
};

const Contact = () => {
  const [countryName, setCountryName] = useState(""); // Dodajemo stanje za ime države
  const [country, setCountry] = useState<CountryType | undefined>(undefined);

  const getData = async () => {
    await fetch(`https://restcountries.com/v3.1/name/${countryName}`) // Koristimo countryName za dinamičko postavljanje URL-a
      .then((data) => {
        return data.json();
      })
      .then((res: CountryType[]) => {
        setCountry(res[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    //getData(); // Maknuli smo ovo jer želimo sliku dobiti tek nakon što korisnik klikne na gumb
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)} // Spremamo vrijednost unesenog imena države u stanje countryName
        />
        <button onClick={getData} key="getDataButton">
          Get the flag
        </button>
      </div>
      {country && <img src={country.flags.png} alt="" />}{" "}
      {/* Prikazujemo sliku zastave samo ako je država pronađena */}
    </>
  );
};
export default Contact;
