import { api } from "../http/axiosClient";
import type { PokemonRepository } from "../../core/repositories/PokemonRepository";

export class PokemonServiceImpl implements PokemonRepository {
  async getAbilities(nameOrId: string): Promise<string[]> {
    const res = await api.get(`/pokemon?pokemon=${nameOrId}`);
    return res.data.abilities;
  }
}
