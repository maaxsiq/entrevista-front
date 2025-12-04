import { useState } from "react";
import { getPokemonAbilities } from "~/queries/getPokemonAbilities";

export function usePokemonAbilities() {
  const [abilities, setAbilities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function load(nameOrId: string) {
    try {
      setLoading(true);
      setError("");

      const abilities = await getPokemonAbilities(nameOrId);
      setAbilities(abilities);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Erro desconhecido";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return { abilities, loading, error, load };
}
