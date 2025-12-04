import { useState } from "react";
import { usePokemonAbilities } from "~/hooks/usePokemonAbilities";

export const HomePage = () => {
  const [pokemon, setPokemon] = useState("");
  const { abilities, loading, error, load } = usePokemonAbilities();

  function handleSearch() {
    if (!pokemon) return;
    load(pokemon.toLowerCase());
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        background: "#111827",
        color: "white",
        borderRadius: "12px",
        border: "1px solid #1f2937",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <h2 style={{ margin: 0, fontSize: "20px", fontWeight: 600 }}>
        Buscar Pokémon
      </h2>

      <div style={{ display: "flex", gap: "12px" }}>
        <input
          value={pokemon}
          onChange={(e) => setPokemon(e.target.value)}
          placeholder="Digite um Pokémon..."
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: "8px",
            border: "1px solid #374151",
            background: "#0f172a",
            color: "white",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <button
          onClick={handleSearch}
          style={{
            padding: "10px 18px",
            background: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Buscar
        </button>
      </div>

      {loading && <p style={{ opacity: 0.7 }}>Carregando...</p>}
      {error && <p style={{ color: "#f87171" }}>{error}</p>}

      {abilities.length > 0 && (
        <div
          style={{
            marginTop: "10px",
            padding: "15px",
            background: "#1e293b",
            borderRadius: "10px",
            border: "1px solid #334155",
          }}
        >
          <h3 style={{ marginTop: 0, fontSize: "16px", fontWeight: 600 }}>
            Habilidades
          </h3>

          <ul style={{ paddingLeft: "18px", marginTop: "8px" }}>
            {abilities.map((ability) => (
              <li
                key={ability}
                style={{ marginBottom: "4px", fontSize: "14px" }}
              >
                {ability}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
