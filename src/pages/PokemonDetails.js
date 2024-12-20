import React, { useState, useEffect } from 'react';
import '../styles/components/_pokemondetails.scss';
import { useParams } from 'react-router-dom';
import { getPokemon, getPokemonSpecies } from '../services/pokeApi';

const PokemonDetails = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [species, setSpecies] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                setLoading(true);
                setError(null);

                const [pokemonData, speciesData] = await Promise.all([
                    getPokemon(id),
                    getPokemonSpecies(id)
                ]);

                setPokemon(pokemonData);
                setSpecies(speciesData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!pokemon || !species) return null;

    const englishDescription = species.flavor_text_entries
        .find(entry => entry.language.name === 'en')
        ?.flavor_text.replace(/[\n\f]/g, ' ');

    return (
        <div className="first-home-container">
            <div className="row">
                <h1 id="pokemon-id">#{pokemon.id}</h1>
                <h1>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h1>
                <div className="pokemon-image-container">
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="pokemon-image__sprite"
                    />
                </div>
            </div>
            <div className="first-home-container__types">
                {pokemon.types.map(type => (
                    <span
                        key={type.type.name}
                        className={`pokemon-type pokemon-type--${type.type.name}`}
                    >
                        {type.type.name}
                    </span>
                ))}
            </div>

            <p>{englishDescription}</p>

            <div className="first-home-container__stats">
                {pokemon.stats.map(stat => (
                    <div key={stat.stat.name} className="pokemon-details__stat">
                        <span>{stat.stat.name}</span>
                        <div
                            className={`pokemon-details__value ${
                                stat.base_stat < 50
                                    ? 'pokemon-details__value--red'
                                    : stat.base_stat < 80
                                        ? 'pokemon-details__value--blue'
                                        : 'pokemon-details__value--green'
                            }`}
                        >
                            <span>{stat.base_stat}</span>
                        </div>
                    </div>
                ))}
            </div>

            <h2>Abilities</h2>
            <div className="first-home-container__abilities">
                {pokemon.abilities.map(ability => (
                    <span key={ability.ability.name}>
                                {ability.ability.name.replace('-', ' ')}
                            </span>
                ))}
            </div>
        </div>
    );
};

export default PokemonDetails;