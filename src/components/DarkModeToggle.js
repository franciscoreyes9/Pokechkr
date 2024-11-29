import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import moonIcon from '../assets/images/moon-icon.png';
import sunIcon from '../assets/images/sun-icon.png';

const DarkModeToggle = () => {
    const { isDarkMode, toggleDarkMode } = useContext(ThemeContext);

    return (
        <button
            className="dark-mode-toggle"
            onClick={toggleDarkMode}
        >
            <img
                src={isDarkMode ? sunIcon : moonIcon}
                alt={isDarkMode ? "Light Mode" : "Dark Mode"}
            />
        </button>
    );
};

export default DarkModeToggle;
