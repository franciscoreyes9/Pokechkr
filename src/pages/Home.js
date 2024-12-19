import HoverCard from "../components/HoverCard";
import '../styles/components/_buttons.scss';
import PokemonCarousel from "../components/PokemonCarousel";
import lightArrow from "../assets/images/ui/button-arrow.png";
import darkArrow from "../assets/images/ui/button-arrow-dark.png";
import externalLink from "../assets/images/ui/external-link.png";
import {Link} from "react-router-dom";
import GymLeader from "../components/GymLeader";
import React, {useContext} from "react";
import { ThemeContext } from '../components/ThemeContext';

const Home = () => {

    const { isDarkMode  } = useContext(ThemeContext);

    return (
        <div className="Home">
            <div className="first-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Team Builder</button>
                </div>
                <h1>Plan your game in advance</h1>
                <div className="row">
                    <div className="hover-card-wrapper">
                        <HoverCard/>
                    </div>
                    <div className="black-card">
                        <h2>New starters</h2>
                        <p>Treecko, Torchic and Mudkip.</p>
                    </div>
                </div>
                <hr/>
                <h2>Create your own Team!</h2>
                <p className="hero">
                    Pokéchkr Team Builder is a tool created for trainers who want to build their ideal team to tackle
                    the challenges of the Hoenn region. Here, you can select your favorite Pokémon, equip them with
                    the most powerful moves, and get ready to face the Gym Leaders. Every team is unique and built
                    according to your gameplay strategies.
                </p>
                <hr/>
                <PokemonCarousel/>
                <PokemonCarousel/>
                <hr/>
                <button className="btn btn-arrow"><Link to="team-builder">
                    Jump into Pokéchkr Team Builder
                    <img src={isDarkMode ? darkArrow : lightArrow} alt="Arrow"/>
                </Link></button>
            </div>
            <div className="second-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Gym Leaders</button>
                    <button className="btn btn-new">New</button>
                </div>
                <h1>Check all your opponents</h1>
                <p className="hero">
                    Get ready to challenge the best trainers with our advanced system for tracking and managing
                    your battles with the Gym Leaders. Each battle brings you closer to new victories, and with
                    our system, you'll be able to monitor your progress, study the best strategies, and perfect
                    your trainer skills. Be prepared for the next showdown and prove that you're the strongest!
                </p>
                <GymLeader key={"tate-liza"} gymLeaderData={"tate & liza"}/>
                <div className="row">
                    <button className="btn btn-arrow"><Link to="gym-leaders">
                        Fight Gym Leaders
                        <img src={isDarkMode ? darkArrow : lightArrow} alt="Arrow"/>
                    </Link></button>
                    <button className="btn btn-secondary"><Link to="team-builder">
                        Check our News
                        <img src={externalLink}/>
                    </Link></button>
                </div>
            </div>
            <div className="first-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Community</button>
                    <button className="btn btn-tag">Patches</button>
                </div>
                <h1>Pokéchkr System</h1>
                <p className="hero">
                    Each color reflects the unique essence of the types, from blue for Water to green for Grass,
                    creating a magical atmosphere. Discover how these colors enhance the Pokéchkr experience.
                    Contributions to this project are always welcome - join us in supporting the community!
                </p>
                <div className="row">
                    <button className="btn btn-arrow"><Link to="legend">
                        Dive into our Legend
                        <img src={isDarkMode ? darkArrow : lightArrow} alt="Arrow"/>
                    </Link></button>
                    <button className="btn btn-secondary"><Link to="team-builder">
                        Github
                        <img src={externalLink}/>
                    </Link></button>
                </div>
            </div>
        </div>
    );
}

export default Home;