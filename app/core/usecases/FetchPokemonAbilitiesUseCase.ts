import type { PokemonRepository } from "../repositories/PokemonRepository";

export class FetchPokemonAbilitiesUseCase {
  constructor(private repository: PokemonRepository) {}

  async execute(nameOrId: string): Promise<string[]> {
    return await this.repository.getAbilities(nameOrId);
  }
}
