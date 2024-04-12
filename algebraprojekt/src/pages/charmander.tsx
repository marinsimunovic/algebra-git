import { useEffect, useState } from "react";
import Arrow from "../assets/arrow.svg";
type PokemonType = {
  name: string;
  order: number;
  sprites: { front_default: string; front_shiny: string };
  abilities: PokemonAbilityType[];
};
type PokemonAbilityType = { ability: { name: string }; types: PokemonTypeType };

type PokemonTypeType = { type: { name: string } };
const Charmander = () => {
  const [pokemonData, setPokemonData] = useState<PokemonType | null>(null);

  const getData = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/charmander`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setPokemonData(data);
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
      <a href="/vjezbe">
        <img className="back" src={Arrow} alt="arrow" />
      </a>
      {pokemonData ? (
        <>
          <h1>
            #{pokemonData.order} | {pokemonData.name}
          </h1>{" "}
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <div>
            <div>
              Abilities:{" "}
              {pokemonData.abilities.map((ability, index) => (
                <span key={index}>
                  {ability.ability.name}
                  {index !== pokemonData.abilities.length - 1 && ", "}
                </span>
              ))}
            </div>
            <div>Stats: </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Charmander;
