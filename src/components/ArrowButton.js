import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import darkArrow from '../assets/images/ui/button-arrow-dark.png';
import lightArrow from '../assets/images/ui/button-arrow.png';

const ArrowButton = ({ text, to }) => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <button className="btn btn-arrow">
            <Link to={to}>
                {text}
                <img
                    src={isDarkMode ? darkArrow : lightArrow}
                    alt="Arrow"
                />
            </Link>
        </button>
    );
};

export default ArrowButton;