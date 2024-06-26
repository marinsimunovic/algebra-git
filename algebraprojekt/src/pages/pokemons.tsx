import { useState, useEffect, SetStateAction } from "react";
import { Outlet } from "react-router-dom";
import Select from "react-select";
import Arrow from "../assets/arrow.svg";

type PokemonsResponseType = {
  count: number;
  next: string;
  results: PokemonType[];
};

type PokemonType = {
  name: string;
  url: string;
};

type ActivePokemonType = {
  sprites: {
    front_default: string;
  };
};

//ItemPerPage
type OptionType = {
  value: string;
  label: string;
};

const options: OptionType[] = [
  { value: "10", label: "10 Pokemona" },
  { value: "20", label: "20 Pokemona" },
  { value: "100", label: "100 Pokemona" },
];

const defaultLimit = "10";

const About = () => {
  const [data, setData] = useState<PokemonType[]>([]);
  const [limit, setLimit] = useState<string | undefined>("10");

  const [activePokemon, setActivePokemon] = useState<
    ActivePokemonType | undefined
  >(undefined);

  const getData = async (limit: string | undefined) => {
    await fetch(
      `https://pokeapi.co/api/v2/pokemon/?limit=${limit ? limit : defaultLimit}`
    )
      .then((data) => {
        return data.json();
      })
      .then((res: PokemonsResponseType) => {
        setData(res.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPokemonData = async (pokemon: string) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then((data) => {
        return data.json();
      })
      .then((res: ActivePokemonType) => {
        setActivePokemon(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(limit);
  }, [limit]);

  return (
    <>
      <a href="/vjezbe">
        <img className="back" src={Arrow} alt="arrow" />
      </a>
      <div>Buttons of Pokemons</div>

      <div>
        <h1>Pokemon</h1>
        <Select
          onChange={(e: { value: SetStateAction<string | undefined> }) => {
            //getData(e?.value);
            setLimit(e?.value);
          }}
          options={options}
        />
        <div>
          {data.map((pokemon) => {
            return (
              <button
                onClick={(e) => {
                  const test = e.target as HTMLButtonElement;
                  getPokemonData(test.innerHTML);
                }}
                key={pokemon.name}
              >
                {pokemon.name}
              </button>
            );
          })}
        </div>
        <div>
          <img src={activePokemon?.sprites.front_default} alt="" />
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default About;
