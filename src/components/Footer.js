import logoBlack from '../assets/images/logo-black.png';
import logoBlackDark from '../assets/images/logo-black-dark.png';
import {NavLink} from "react-router-dom";
import React, {useContext} from "react";
import {ThemeContext} from "./ThemeContext";
import logo from "../assets/images/logo.png";
import DarkModeToggle from "./DarkModeToggle";

const Footer = () => {

    const { isDarkMode} = useContext(ThemeContext);
    return (
        <footer className={`footer ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="footer__container">
                <NavLink to="/" className="footer__link">
                    <img
                        src={isDarkMode ? logoBlackDark : logoBlack}
                        alt={isDarkMode ? "logoBlackDark" : "logoBlack"}
                    />
                </NavLink>

                <ul className="footer__nav">
                    <div className="footer__nav__span">
                        <li className="footer__nav__title">Navigation</li>
                        <li>
                            <NavLink to="/team-builder" className="footer__link">
                                Team Builder
                            </NavLink>
                        </li>
                        <li className="navbar__gymleaders">
                            <NavLink to="/gym-leaders" className="footer__link">
                                Gym Leaders
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/legend" className="footer__link">
                                Legend
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pokedex" className="footer__link">
                                Pokédex
                            </NavLink>
                        </li>
                    </div>
                    <div className="footer__nav__span">
                        <li className="footer__nav__title">External links</li>
                        <li>
                            <NavLink to="/#" className="footer__link">
                                API Documentation
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/#" className="footer__link">
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/#" className="footer__link">
                                Github
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </div>
            <div className="footer__copyright">
                © 2024 Pokéchkr. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer;