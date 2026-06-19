'use client';

import { useEffect, useState } from 'react';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-white">Pokédex</h1>
          <button
            onClick={handleRefresh}
            className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300"
          >
            Load New Pokémon
          </button>
        </div>

        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-100 px-4 py-3 rounded-lg mb-8">
            {error}
          </div>
        )}

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : pokemon.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pokemon.map((poke) => (
              <div
                key={poke.id}
                className="group bg-gradient-to-br from-slate-800 to-slate-700 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden border border-slate-600"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 flex justify-between items-start">
                  <div>
                    <p className="text-slate-200 text-sm font-semibold">
                      #{poke.id.toString().padStart(3, '0')}
                    </p>
                    <h2 className="text-white text-xl font-bold">
                      {poke.name}
                    </h2>
                  </div>
                </div>

                {/* Image */}
                <div className="bg-gradient-to-b from-slate-700 to-slate-600 p-6 flex justify-center items-center h-48">
                  {poke.image ? (
                    <img
                      src={poke.image}
                      alt={poke.name}
                      className="h-40 w-40 object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <div className="text-gray-400">No image available</div>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-4">
                  {/* Types */}
                  <div className="mb-4">
                    <p className="text-gray-400 text-xs font-semibold mb-2">
                      TYPES
                    </p>
                    <div className="flex gap-2 flex-wrap">
                      {poke.types.map((typeData, idx) => (
                        <span
                          key={idx}
                          className={`${
                            typeColors[typeData.type.name] ||
                            'bg-gray-500'
                          } text-white text-xs font-bold px-3 py-1 rounded-full`}
                        >
                          {typeData.type.name.charAt(0).toUpperCase() +
                            typeData.type.name.slice(1)}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-slate-600/50 p-2 rounded">
                      <p className="text-gray-400 text-xs">Height</p>
                      <p className="text-white font-bold">
                        {(poke.height / 10).toFixed(1)}m
                      </p>
                    </div>
                    <div className="bg-slate-600/50 p-2 rounded">
                      <p className="text-gray-400 text-xs">Weight</p>
                      <p className="text-white font-bold">
                        {(poke.weight / 10).toFixed(1)}kg
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-400">
            No Pokémon found
          </div>
        )}
      </div>
    </div>
  );
}

