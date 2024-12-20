import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPokemon } from '../services/pokeApi';
import '../styles/components/_gymleader.scss';
import gymLeaders from '../data/gymLeaders.json';


const GymLeader = ({ gymLeaderData }) => {
    const [pokemonData, setPokemonData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Find gym leader data from JSON
    const leader = gymLeaders.find((leader) => leader.name.toLowerCase() === gymLeaderData.toLowerCase());

    useEffect(() => {
        const fetchPokemonData = async () => {
            if (!leader) return; // Exit if no leader is found
            try {
                setIsLoading(true);
                const pokemonPromises = leader.pokemon.map(async (pokemon) => {
                    const data = await getPokemon(pokemon.name);
                    const itemSprite = pokemon.item
                        ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/${pokemon.item}.png`
                        : null;

                    return {
                        ...pokemon,
                        ...data,
                        types: data.types.map((type) => type.type.name),
                        emeraldNumber: data.id,
                        itemSprite,
                    };
                });

                const resolvedPokemon = await Promise.all(pokemonPromises);
                setPokemonData(resolvedPokemon);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPokemonData();
    }, [leader]);

    if (!leader) {
        return <div className="error-message">Gym Leader not found!</div>;
    }

    if (error) {
        return <div className="error-message">Error loading gym leader data: {error}</div>;
    }

    return (
        <div className="gym-leader">
            <div className="gym-leader__header">
                <div className="gym-leader__info">
                    <img
                        src={leader.sprite}
                        alt={`Gym Leader ${leader.name}`}
                        className="gym-leader__sprite"
                    />
                    <h2 className="gym-leader__name">{leader.name}</h2>
                    <p className="gym-leader__bounty">Bounty: {leader.bounty}</p>
                </div>
                <img
                    src={leader.badge}
                    alt="Gym Badge"
                    className="gym-leader__badge"
                />
            </div>

            <div className="gym-leader__content">
                {isLoading ? (
                    <div className="gym-leader__loading">Loading Pokémon data...</div>
                ) : (
                    <div className="pokemon-grid">
                        {pokemonData.map((pokemon) => (
                            <Link to={`/pokemon/${pokemon.emeraldNumber}`} key={pokemon.name}>
                                <div className="pokemon-card-gym">
                                    <div className="pokemon-card-gym__content">
                                        <div className="pokemon-card-gym__sprite-container">
                                            <img
                                                src={pokemon.sprites.front_default}
                                                alt={pokemon.name}
                                                className="pokemon-card-gym__sprite"
                                            />
                                        </div>
                                        <div className="pokemon-card-gym__info">
                                            <h4 className="pokemon-card-gym__name">{pokemon.name}</h4>
                                            <p className="pokemon-card-gym__level">Lvl. {pokemon.level}</p>
                                            <p className="pokemon-card-gym__number">#{pokemon.emeraldNumber}</p>
                                            {pokemon.itemSprite && (
                                                <div className="pokemon-card-gym__item">
                                                    <img
                                                        src={pokemon.itemSprite}
                                                        alt={pokemon.item.replace('-', ' ')}
                                                        className="pokemon-card-gym__item-sprite"
                                                    />
                                                    <span className="pokemon-card-gym__item-name">
                                {pokemon.item.split('-').map((word) =>
                                    word.charAt(0).toUpperCase() + word.slice(1)
                                ).join(' ')}
                            </span>
                                                </div>
                                            )}
                                        </div>
                                        <div className="pokemon-card-gym__types">
                                            {pokemon.types.map((type) => (
                                                <span
                                                    key={type}
                                                    className={`pokemon-card-gym__type pokemon-card-gym__type--${type.toLowerCase()}`}
                                                >
                            {type}
                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default GymLeader;