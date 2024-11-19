import logoBlack from '../assets/images/logo-black.png';
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__section">
                        <NavLink to="/" className="navbar__link">
                            <img src={logoBlack} alt="LogoBlack"/>
                        </NavLink>
                    </div>

                    <div className="footer__section">
                        <h3>Navigation</h3>
                        <ul>
                            <li><a href="/pokedex">Pokedex</a></li>
                            <li><a href="/team-builder">Team Builder</a></li>
                            <li><a href="/gym-leaders">Gym Leaders</a></li>
                            <li><a href="/legend">Legend</a></li>
                        </ul>
                    </div>
                    <div className="footer__section">
                        <h3>Resources</h3>
                        <ul>
                            <li><a href="#">API Documentation</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__copyright">
                © 2024 Pokéchkr. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;