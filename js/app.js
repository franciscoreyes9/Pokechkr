document.addEventListener('DOMContentLoaded', () => {
    fetch('../pokemons.json')
        .then(response => response.json())
        .then(pokemons => {
            const container = document.getElementById('pokemon-container');
            pokemons.forEach(pokemon => {
                const pokemonElement = document.createElement('pokemon-component');
                pokemonElement.setAttribute('name', pokemon.name);
                pokemonElement.setAttribute('image', pokemon.image);
                pokemonElement.setAttribute('type1', pokemon.type1);
                pokemonElement.setAttribute('type2', pokemon.type2);
                container.appendChild(pokemonElement);
            });
        })
        .catch(error => console.error('Error loading Pokemon data:', error));
});

document.addEventListener('DOMContentLoaded', () => {
    let allPokemons = [];

    fetch('../pokemons.json')
        .then(response => response.json())
        .then(pokemons => {
            allPokemons = pokemons;
            renderPokemons(allPokemons);
            setupSearch();
        })
        .catch(error => console.error('Error loading Pokemon data:', error));

    function renderPokemons(pokemons) {
        const container = document.getElementById('pokemon-container');
        container.innerHTML = '';
        pokemons.forEach(pokemon => {
            const pokemonElement = document.createElement('pokemon-component');
            pokemonElement.setAttribute('name', pokemon.name);
            pokemonElement.setAttribute('image', pokemon.image);
            pokemonElement.setAttribute('type1', pokemon.type1);
            pokemonElement.setAttribute('type2', pokemon.type2);
            container.appendChild(pokemonElement);
        });
    }

    function setupSearch() {
        const searchInput = document.getElementById('pokemon-search');
        const searchButton = document.getElementById('search-button');

        searchButton.addEventListener('click', doSearch);
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                doSearch();
            }
        });

        function doSearch() {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredPokemons = allPokemons.filter(pokemon =>
                pokemon.name.toLowerCase().includes(searchTerm) ||
                pokemon.type1.toLowerCase().includes(searchTerm) ||
                pokemon.type2.toLowerCase().includes(searchTerm)
            );
            renderPokemons(filteredPokemons);
        }
    }
});