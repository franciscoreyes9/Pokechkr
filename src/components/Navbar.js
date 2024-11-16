import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__container">
                <NavLink to="/" className="navbar__logo">
                    Pokemon App
                </NavLink>
                <div className="navbar__nav">
                    <NavLink to="/pokedex" className="navbar__link">
                        Pokedex
                    </NavLink>
                    <NavLink to="/team-builder" className="navbar__link">
                        Team Builder
                    </NavLink>
                    <NavLink to="/gym-leaders" className="navbar__link">
                        Gym Leaders
                    </NavLink>
                    <NavLink to="/legend" className="navbar__link">
                        Legend
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;