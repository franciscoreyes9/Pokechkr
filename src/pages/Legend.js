import React from "react";
import PokemonCard from "../components/pokemons/PokemonCard";

const Legend = () => {
    return (
        <div className="Legend">
            <div className="first-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Legend</button>
                </div>
                <h1>Pokéchkr System</h1>
                <PokemonCard pokemonId={1} simplePokedex={true} />
                <PokemonCard pokemonId={2} simplePokedex={true} />
                <PokemonCard pokemonId={3} simplePokedex={true} />
            </div>
        </div>
    );
}

export default Legend;