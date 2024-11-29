import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import DarkModeToggle from '../components/DarkModeToggle';
import logo from '../assets/images/logo.png';

const Navbar = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <nav className={`navbar ${isDarkMode ? 'dark-mode' : ''}`}>
            <div className="navbar__container">
                <NavLink to="/" className="navbar__link">
                    <img src={logo} alt="Logo"/>
                </NavLink>

                <ul className="navbar__nav">
                    <li>
                        <NavLink to="/team-builder" className="navbar__link">
                            Team Builder
                        </NavLink>
                    </li>
                    <li className="navbar__gymleaders">
                        <NavLink to="/gym-leaders" className="navbar__link">
                            Gym Leaders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/legend" className="navbar__link">
                            Legend
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pokedex" className="navbar__link navbar__link--pokedex">
                            Pokédex
                        </NavLink>
                    </li>
                    <li className="navbar__dark-mode-toggle">
                        <DarkModeToggle />
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
