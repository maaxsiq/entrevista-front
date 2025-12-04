import { fetchPokemonAbilities } from "~/service/pokemonService";

export async function getPokemonAbilities(nameOrId: string) {
  return await fetchPokemonAbilities(nameOrId);
}
