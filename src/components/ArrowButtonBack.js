import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from './ThemeContext';
import darkArrow from '../assets/images/ui/button-back-arrow-dark.png';
import lightArrow from '../assets/images/ui/button-back-arrow.png';

const ArrowButton = ({ text, to }) => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <button className="btn btn-arrow-back">
            <Link to={to}>
                <img
                    src={isDarkMode ? darkArrow : lightArrow}
                    alt="Arrow"
                />
                {text}
            </Link>
        </button>
    );
};

export default ArrowButton;