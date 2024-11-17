import HoverCard from "../components/HoverCard";
import PokemonCard from "../components/pokemons/PokemonCard";
import '../styles/components/_buttons.scss';

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

                <PokemonCard pokemonId="milotic"/>
            </div>
            <div className="first-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Team Builder</button>
                </div>
                <h1>Plan your game in advance</h1>
                <div className="hover-card-wrapper">
                    <HoverCard/>
                </div>

                <PokemonCard pokemonId="milotic"/>
            </div>
        </div>
    );
}

export default Home;