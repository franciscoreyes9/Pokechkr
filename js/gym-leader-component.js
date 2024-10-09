class GymLeaderComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const leaderName = this.getAttribute('leader');
        this.loadLeaderData(leaderName);
    }

    async loadLeaderData(leaderName) {
        try {
            const response = await fetch('../gymleader.json');
            const data = await response.json();
            const leaderData = data.find(leader => leader.name === leaderName);

            if (leaderData) {
                this.render(leaderData);
            } else {
                console.error(`Gym leader "${leaderName}" not found`);
            }
        } catch (error) {
            console.error('Error loading gym leader data:', error);
        }
    }

    async render(leaderData) {
        const response = await fetch('../css/components/gym-leader-component.css');
        const styles = await response.text();

        this.shadowRoot.innerHTML = `
            <style>${styles}</style>
            <div class="gym-leader-card">
                <div class="gym-leader-header">
                    <img src="${leaderData.image}" alt="${leaderData.name}" class="gym-leader-image">
                    <span class="gym-leader-name">${leaderData.name}</span>
                </div>
                <ul class="pokemon-list">
                    ${leaderData.pokemon.map(pokemon => `
                        <li class="pokemon-item">
                            <img src="${pokemon.image}" alt="${pokemon.name}" class="pokemon-image">
                            <span class="pokemon-name">${pokemon.name}</span>
                            <span class="pokemon-level">lvl. ${pokemon.level}</span>
                            <div class="pokemon-types">
                                <div class="pokemon-type" style="background-color: ${this.getTypeColor(pokemon.type1)}" title="${pokemon.type1}"></div>
                                ${pokemon.type2 ? `<div class="pokemon-type" style="background-color: ${this.getTypeColor(pokemon.type2)}" title="${pokemon.type2}"></div>` : ''}
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        this.setupPokemonInteraction();
    }

    setupPokemonInteraction() {
        this.shadowRoot.querySelectorAll('.pokemon-item').forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('disabled');
            });
        });
    }

    getTypeColor(type) {
        const typeColors = {
            normal: '#F6F7EB', fire: '#E94F37', water: '#0066FF',
            electric: '#FFD200', grass: '#88D18A', ice: '#02CEFF',
            fighting: '#B10F2E', poison: '#44344F', ground: '#d5bdaf',
            flying: '#1E96FC', psychic: '#FF99C9', bug: '#92977E',
            rock: '#E7DFC6', ghost: '#424874', dragon: '#A177FF',
            dark: '#160F29', steel: '#DBDBDB', fairy: '#E34A6F',
            none: '#FFFFFF00'
        };
        return typeColors[type.toLowerCase()] || '#000000';
    }
}

customElements.define('gym-leader-component', GymLeaderComponent);
//DA MIGLIORARE, utilizzare componente pokemon