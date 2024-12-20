import React from "react";
import PokemonGrid from "../components/PokemonGrid";
import ArrowButton from "../components/ArrowButton";

const Pokedex = () => {
    return (
        <div className="Pokedex">
            <div className="first-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Pokedéx</button>
                </div>
                <h1>Pokedéx</h1>
                <PokemonGrid />
            </div>
        </div>
    );
}

export default Pokedex;