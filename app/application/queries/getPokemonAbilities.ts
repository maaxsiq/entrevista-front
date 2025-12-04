import { FetchPokemonAbilitiesUseCase } from "../../core/usecases/FetchPokemonAbilitiesUseCase";
import { PokemonServiceImpl } from "../../infrastructure/services/PokemonService";

const pokemonService = new PokemonServiceImpl();
const fetchPokemonAbilitiesUseCase = new FetchPokemonAbilitiesUseCase(
  pokemonService
);

export async function getPokemonAbilities(nameOrId: string): Promise<string[]> {
  return await fetchPokemonAbilitiesUseCase.execute(nameOrId);
}
