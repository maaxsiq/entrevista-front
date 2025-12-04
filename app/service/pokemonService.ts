import axios from "axios";

export async function fetchPokemonAbilities(nameOrId: string) {
  const response = await axios.get(
    `http://localhost:3000/pokemon?pokemon=${nameOrId}`
  );

  return response.data.abilities as string[];
}
