import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <Link to="/" className="navbar__brand">Pokéchkr</Link>
                <div className="navbar__links">
                    <Link to="/pokedex">Pokédex</Link>
                    <Link to="/team-builder">Team Builder</Link>
                    <Link to="/gym-leaders">Gym Leaders</Link>
                    <Link to="/legend">Legend</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;