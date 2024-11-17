import React, { useState, useEffect } from 'react';
import { getPokemon, getPokemonSpecies } from '../../services/pokeApi';

const PokemonCard = ({ pokemonId }) => {
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
                    getPokemon(pokemonId),
                    getPokemonSpecies(pokemonId)
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
    }, [pokemonId]);

    if (loading) {
        return (
            <div className="pokemon-card">
                <div className="pokemon-card__loading">
                    <div className="pokemon-card__loading-bar"></div>
                    <div className="pokemon-card__loading-bar"></div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="pokemon-card pokemon-card--error">
                <p className="pokemon-card__error-message">Error: {error}</p>
            </div>
        );
    }

    if (!pokemon || !species) return null;

    const englishDescription = species.flavor_text_entries
        .find(entry => entry.language.name === 'en')
        ?.flavor_text.replace(/[\n\f]/g, ' ');

    return (
        <div className="pokemon-card">
            <h2 className="pokemon-card__title">
                {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h2>
            <div className="pokemon-card__content">
                <div className="pokemon-card__image-container">
                    <img
                        src={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        className="pokemon-card__image"
                    />
                </div>

                <div className="pokemon-card__info">
                    <div className="pokemon-card__types">
                        <h3 className="pokemon-card__subtitle">Type(s)</h3>
                        <div className="pokemon-card__type-list">
                            {pokemon.types.map(type => (
                                <span
                                    key={type.type.name}
                                    className={`pokemon-card__type pokemon-card__type--${type.type.name}`}
                                >
                                    {type.type.name}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="pokemon-card__stats">
                        <h3 className="pokemon-card__subtitle">Stats</h3>
                        <div className="pokemon-card__stat-list">
                            {pokemon.stats.map(stat => (
                                <div key={stat.stat.name} className="pokemon-card__stat">
                                    <span className="pokemon-card__stat-name">
                                        {stat.stat.name}:
                                    </span>
                                    <span className="pokemon-card__stat-value">
                                        {stat.base_stat}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="pokemon-card__description">
                        <h3 className="pokemon-card__subtitle">Description</h3>
                        <p className="pokemon-card__text">{englishDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PokemonCard;