import React, {useState, useEffect } from 'react';
import { animated, useSpring } from '@react-spring/web';
import PokemonCard from './pokemons/PokemonCard';
import '../styles/components/_pokemoncarousel.scss';

const PokemonCarousel = () => {
    const [pokemons, setPokemons] = useState([]);
    const [isPaused, setIsPaused] = useState(false);
    const TOTAL_POKEMON = 160;
    const CARD_WIDTH = 128;
    const CARD_MARGIN = 8;

    useEffect(() => {
        const pokemonIds = Array.from({ length: TOTAL_POKEMON }, (_, i) => i + 1);
        const extendedIds = [...pokemonIds, ...pokemonIds.slice(0, 10)];
        setPokemons(extendedIds);
    }, []);

    const [{ x }, api] = useSpring(() => ({
        from: { x: Math.floor(Math.random() * CARD_WIDTH) * -30},
        to: { x: -((TOTAL_POKEMON) * (CARD_WIDTH + CARD_MARGIN * 2)) },
        loop: true,
        config: { duration: 600000 },
        immediate: isPaused,
    }));

    useEffect(() => {
        if (isPaused) {
            api.pause();
        } else {
            api.resume();
        }
    }, [isPaused, api]);

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    return (
        <div className="carousel-container">
            <animated.div
                className="carousel-track"
                style={{
                    transform: x.to(value => `translateX(${value}px)`)
                }}
            >
                <div className="carousel-content">
                    {pokemons.map((id, index) => (
                        <div
                            key={`${id}-${index}`}
                            className="carousel-item"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <PokemonCard pokemonId={id} simple={true} />
                        </div>
                    ))}
                </div>
            </animated.div>
        </div>
    );
};


export default PokemonCarousel;