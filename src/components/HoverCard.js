import React from 'react';
import { Tilt } from 'react-tilt';
import { Link } from 'react-router-dom';
import '../styles/components/_hovercard.scss';

function HoverCard() {
    return (
        <Link to="/pokedex" className="hover-card-link">
            <Tilt
                className="hover-card tilt-card"
                options={{ max: 2.5, scale: 1.004 }}
            >
                <div className="hover-card-content">
                    <h2>135 Pokémons <br></br>introduced</h2>
                    <p>Iconic Pokémons like the legendaries Kyogre, Groudon, and Rayquaza. Check out Hoenn Pokédex!</p>
                </div>
            </Tilt>
        </Link>
    );
}

export default HoverCard;
