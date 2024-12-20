import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/_pokemongrid.scss'

const PokemonGrid = () => {
    const [pokemons, setPokemons] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchPokemons = async () => {
            try {
                const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=494');
                const data = await response.json();

                const pokemonDetails = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const res = await fetch(pokemon.url);
                        return res.json();
                    })
                );

                setPokemons(pokemonDetails);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching Pokemon:', error);
                setLoading(false);
            }
        };

        fetchPokemons();
    }, []);

    const filteredPokemon = pokemons.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="loading-container">
                <p>Loading Pokémon...</p>
            </div>
        );
    }

    return (
        <div className="pokemon-container">
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search Pokémon..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <div className="pokemon-grid-pokedex">
                {filteredPokemon.map((pokemon) => (
                    <Link key={pokemon.id} to={`/pokemon/${pokemon.id}`}>
                        <div className="pokemon-card pokemon-card--simple--pokedex">
                            <img
                                src={pokemon.sprites.front_default}
                                alt={pokemon.name}
                                className="pokemon-card__image"
                            />
                            <p>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p>
                            #{pokemon.id}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default PokemonGrid;