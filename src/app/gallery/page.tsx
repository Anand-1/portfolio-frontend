'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

interface PokemonData {
  id: number;
  name: string;
  image: string;
  types: Array<{
    type: {
      name: string;
    };
  }>;
  height: number;
  weight: number;
}

const typeColors: Record<string, string> = {
  normal: 'bg-gray-400',
  fire: 'bg-red-500',
  water: 'bg-blue-500',
  electric: 'bg-yellow-400',
  grass: 'bg-green-500',
  ice: 'bg-cyan-400',
  fighting: 'bg-red-700',
  poison: 'bg-purple-500',
  ground: 'bg-yellow-600',
  flying: 'bg-blue-300',
  psychic: 'bg-pink-500',
  bug: 'bg-green-600',
  rock: 'bg-gray-600',
  ghost: 'bg-purple-700',
  dragon: 'bg-indigo-600',
  dark: 'bg-gray-800',
  steel: 'bg-gray-500',
  fairy: 'bg-pink-400',
};

export default function Gallery() {
  const [pokemon, setPokemon] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        // Fetch 12 random Pokemon
        const randomIds = Array.from({ length: 12 }, () =>
          Math.floor(Math.random() * 1025) + 1
        );

        const promises = randomIds.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
            res.json()
          )
        );

        const results = await Promise.all(promises);

        const pokemonData: PokemonData[] = results.map((data) => ({
          id: data.id,
          name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
          image:
            data.sprites.other['official-artwork'].front_default ||
            data.sprites.front_default,
          types: data.types,
          height: data.height,
          weight: data.weight,
        }));

        setPokemon(pokemonData);
        setError('');
      } catch (err) {
        setError('Failed to load Pokémon. Please try again.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Pokédex</h1>
          <button onClick={handleRefresh} className={styles.refreshButton}>
            Load New Pokémon
          </button>
        </div>

        {error && <div className={styles.errorMessage}>{error}</div>}

        {loading ? (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
          </div>
        ) : pokemon.length > 0 ? (
          <div className={styles.cardGrid}>
            {pokemon.map((poke) => (
              <div key={poke.id} className={styles.pokemonCard}>
                <div className={styles.cardHeader}>
                  <div>
                    <p className={styles.pokeId}>
                      #{poke.id.toString().padStart(3, '0')}
                    </p>
                    <h2 className={styles.pokeName}>{poke.name}</h2>
                  </div>
                </div>

                <div className={styles.imageArea}>
                  {poke.image ? (
                    <img
                      src={poke.image}
                      alt={poke.name}
                      className={styles.pokemonImage}
                    />
                  ) : (
                    <div className={styles.emptyState}>No image available</div>
                  )}
                </div>

                <div className={styles.cardBody}>
                  <div>
                    <p className={styles.typeLabel}>TYPES</p>
                    <div className={styles.typeList}>
                      {poke.types.map((typeData, idx) => (
                        <span
                          key={idx}
                          className={`${typeColors[typeData.type.name] || 'bg-gray-500'} ${styles.typeBadge}`}
                        >
                          {typeData.type.name.charAt(0).toUpperCase() +
                            typeData.type.name.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.statsGrid}>
                    <div className={styles.statBox}>
                      <p className={styles.statLabel}>Height</p>
                      <p className={styles.statValue}>
                        {(poke.height / 10).toFixed(1)}m
                      </p>
                    </div>
                    <div className={styles.statBox}>
                      <p className={styles.statLabel}>Weight</p>
                      <p className={styles.statValue}>
                        {(poke.weight / 10).toFixed(1)}kg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>No Pokémon found</div>
        )}
      </div>
    </div>
  );
}

