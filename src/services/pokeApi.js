const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async (nameOrId) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon/${nameOrId.toLowerCase()}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        throw error;
    }
};

export const getPokemonSpecies = async (nameOrId) => {
    try {
        const response = await fetch(`${BASE_URL}/pokemon-species/${nameOrId.toLowerCase()}`);
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokemon species:', error);
        throw error;
    }
};