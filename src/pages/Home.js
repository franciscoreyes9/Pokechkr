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
                <hr/>
                <h3>Select between all Emerald pokemons and build your squad from scratch!</h3>
                <div className="row">
                    <PokemonCard pokemonId={"treecko"} simple />
                    <PokemonCard pokemonId={"grovyle"} simple />
                    <PokemonCard pokemonId={"sceptile"} simple />
                    <PokemonCard pokemonId={"torchic"} simple />
                    <PokemonCard pokemonId={"combusken"} simple />
                    <PokemonCard pokemonId={"blaziken"} simple />
                    <PokemonCard pokemonId={"mudkip"} simple />
                    <PokemonCard pokemonId={"marshtomp"} simple />
                    <PokemonCard pokemonId={"swampert"} simple />
                </div>
            </div>
            <div className="second-home-container">
                <div className="tagContainer">
                    <button className="btn btn-tag">Team Builder</button>
                </div>
                <h1>Check all your opponents</h1>
                <div className="hover-card-wrapper">
                    <HoverCard/>
                </div>

                <PokemonCard pokemonId="1"/>
            </div>
        </div>
    );
}

export default Home;