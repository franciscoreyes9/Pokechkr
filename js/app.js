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

    let teamPokemons = [];
    const MAX_TEAM_SIZE = 6;

    fetch('../pokemons.json')
        .then(response => response.json())
        .then(pokemons => {
            allPokemons = pokemons;
            renderPokemons(allPokemons);
            setupSearch();
            setupTeamReset();
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
            pokemonElement.addEventListener('click', () => addToTeam(pokemon));
            container.appendChild(pokemonElement);
        });
    }

    function addToTeam(pokemon) {
        if (teamPokemons.length < MAX_TEAM_SIZE && !teamPokemons.includes(pokemon)) {
            teamPokemons.push(pokemon);
            updateTeamDisplay();
        }
    }

    function removeFromTeam(pokemon) {
        const index = teamPokemons.indexOf(pokemon);
        if (index > -1) {
            teamPokemons.splice(index, 1);
            updateTeamDisplay();
        }
    }

    function updateTeamDisplay() {
        const teamContainer = document.getElementById('team-members');
        teamContainer.innerHTML = '';

        const teamWrapper = document.createElement('div');
        teamWrapper.classList.add('team-wrapper');

        teamPokemons.forEach(pokemon => {
            const teamMember = document.createElement('div');
            teamMember.classList.add('team-member');
            teamMember.innerHTML = `
            <div class="pokemon-info">
                <img src="${pokemon.image}" alt="${pokemon.name}">
                <p>${pokemon.name}</p>
            </div>
            <button class="btn remove-pokemon">Rimuovi</button>
        `;
            teamMember.querySelector('.remove-pokemon').addEventListener('click', () => removeFromTeam(pokemon));
            teamWrapper.appendChild(teamMember); // Append team member to the wrapper
        });

        teamContainer.appendChild(teamWrapper); // Append the wrapper to the main container
        updateTeamTypes();
    }

    function updateTeamTypes() {
        const typesContainer = document.getElementById('team-types');
        const types = new Set();
        teamPokemons.forEach(pokemon => {
            types.add(pokemon.type1);
            if (pokemon.type2 !== 'none') types.add(pokemon.type2);
        });
        typesContainer.innerHTML = `Tipi in squadra: <strong>${Array.from(types).join(', ')}</strong>`;
    }

    function setupTeamReset() {
        const resetButton = document.getElementById('reset-team');
        resetButton.addEventListener('click', () => {
            teamPokemons = [];
            updateTeamDisplay();
        });
    }
});
//completo credo