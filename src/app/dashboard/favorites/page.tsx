import { PokemonGrid } from "@/pokemons/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favoritos",
  description: "Bueno, estás viendo la página de pokemones favoritos",
};

export default function PokemonsPage() {
  return (
    <>
      <div className="flex flex-col">
        <h2 className="text-5xl my-3">
          Pokemons Favoritos{" "}
          <small className="text-blue-500">Global State</small>
        </h2>

        <PokemonGrid pokemons={[]} />
      </div>
    </>
  );
}
