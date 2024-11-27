import React, { useState, useEffect, useRef } from 'react';
import PokemonCard from './pokemons/PokemonCard';
import '../styles/components/_pokemoncarousel.scss';

const PokemonCarousel = () => {
    const [pokemonIds, setPokemonIds] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const carouselRef = useRef(null);

    const TOTAL_POKEMON = 1010;
    const POKEMON_BATCH_SIZE = 30;

    useEffect(() => {
        const generatePokemonIds = () => {
            const newIds = [];
            while (newIds.length < POKEMON_BATCH_SIZE) {
                const randomId = Math.floor(Math.random() * TOTAL_POKEMON) + 1;
                if (!pokemonIds.includes(randomId) && !newIds.includes(randomId)) {
                    newIds.push(randomId);
                }
            }
            return newIds;
        };

        try {
            setLoading(true);
            const newBatch = generatePokemonIds();

            setPokemonIds((prevIds) =>
                prevIds.length === 0 ? newBatch : [...prevIds, ...newBatch]
            );
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel || pokemonIds.length === 0) return;

        let animationId;
        const scrollSpeed = 1.2;

        const autoScroll = () => {
            if (isHovered) return;

            if (carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth) {
                carousel.scrollLeft = 0;
            } else {
                carousel.scrollLeft += scrollSpeed;
            }

            animationId = requestAnimationFrame(autoScroll);
        };

        const timeoutId = setTimeout(() => {
            animationId = requestAnimationFrame(autoScroll);
        }, 0);

        return () => {
            clearTimeout(timeoutId);
            cancelAnimationFrame(animationId);
        };
    }, [pokemonIds, isHovered]);

    if (error) {
        return <div className="pokemon-carousel__error">Error: {error}</div>;
    }

    const displayPokemonIds = [...pokemonIds, ...pokemonIds];

    return (
        <div ref={carouselRef} className="pokemon-carousel">
            <div className="pokemon-carousel__track" style={{ display: 'flex' }}>
                {displayPokemonIds.map((pokemonId, index) => (
                    <div
                        key={`pokemon-${index}-${pokemonId}`}
                        className="pokemon-carousel__item"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <PokemonCard pokemonId={pokemonId} simple={true} />
                    </div>
                ))}
                {loading && (
                    <div className="pokemon-carousel__loading">Loading Pokemon...</div>
                )}
            </div>
        </div>
    );
};

export default PokemonCarousel;