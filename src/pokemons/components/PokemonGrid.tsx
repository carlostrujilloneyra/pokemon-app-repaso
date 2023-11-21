import { SimplePokemon } from "@/app/libs/interfaces";
import { PokemonCard } from ".";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <>
      <div className="flex flex-wrap gap-9 items-center justify-center">
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
};
