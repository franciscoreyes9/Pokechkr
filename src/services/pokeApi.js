const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemon = async (nameOrId) => {
    if (!nameOrId) throw new Error('Pokemon name or ID is required');

    try {
        const response = await fetch(`${BASE_URL}/pokemon/${nameOrId.toString().toLowerCase()}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
        throw error;
    }
};

export const getPokemonSpecies = async (nameOrId) => {
    if (!nameOrId) throw new Error('Pokemon name or ID is required');

    try {
        const response = await fetch(`${BASE_URL}/pokemon-species/${nameOrId.toString().toLowerCase()}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching Pokemon species:', error);
        throw error;
    }
};