import HoverCard from "../components/HoverCard";
import '../styles/components/_buttons.scss';
import PokemonCarousel from "../components/PokemonCarousel";
import arrowIcon from "../assets/images/ui/button-arrow.png";
import {Link} from "react-router-dom";
import GymLeader from "../components/GymLeader";

const Home = () => {
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
                <p>
                    Pokéchkr Team Builder is a tool created for trainers who want to build their ideal team to tackle
                    the challenges of the Hoenn region. Here, you can select your favorite Pokémon, equip them with
                    the most powerful moves, and get ready to face the Gym Leaders. Every team is unique and built
                    according to your gameplay strategies.
                </p>
                <hr />
                <PokemonCarousel />
                <PokemonCarousel />
                <hr />
                <button className="btn btn-arrow"><Link to="team-builder">
                    Jump into Pokéchkr Team Builder
                    <img src={arrowIcon}/>
                </Link></button>
            </div>
            <div className="second-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Gym Leaders</button>
                    <button className="btn btn-new">New</button>
                </div>
                <h1>Check all your opponents</h1>
                <GymLeader key={"roxanne"} gymLeaderData={"roxanne"} />
                <GymLeader key={"brawly"} gymLeaderData={"brawly"} />
            </div>
        </div>
    );
}

export default Home;