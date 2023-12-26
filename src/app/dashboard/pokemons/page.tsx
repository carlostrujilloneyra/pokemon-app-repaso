import { PokemonGrid } from "@/pokemons/components";
import { APIResults, SimplePokemon } from "@/libs/interfaces";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemones",
  description:
    "Bueno, estás viendo la página de pokemones, no hay mucho que decir",
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );

  const data: APIResults = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-5xl my-3">
          Listado de Pokémons <small className="text-blue-500">estático</small>
        </h2>

        <PokemonGrid pokemons={pokemons} />
      </div>
    </>
  );
}
