import { useState, useCallback } from "react";
import { getPokemonAbilities } from "../queries/getPokemonAbilities";

export function usePokemonAbilities() {
  const [abilities, setAbilities] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const load = useCallback(async (nameOrId: string) => {
    try {
      setLoading(true);
      setError("");

      const result = await getPokemonAbilities(nameOrId);
      setAbilities(result);
    } catch (err: unknown) {
      let message = "Erro desconhecido";

      if (err instanceof Error) {
        message = err.message;
      } else if (typeof err === "string") {
        message = err;
      }

      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  return { abilities, loading, error, load };
}
