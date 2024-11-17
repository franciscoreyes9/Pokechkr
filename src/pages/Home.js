import HoverCard from "../components/HoverCard";
import PokemonCard from "../components/pokemons/PokemonCard";

const Home = () => {
    return (
        <div className="first-home-container">
            <div className="tagContainer">
                <button className="btn btn-tag">Team Builder</button>
            </div>
            <h1>Plan your game in advance</h1>
            <div className="hover-card-wrapper">
                <HoverCard/>
            </div>

            <PokemonCard pokemonId="milotic" />
        </div>
    );
}

export default Home;