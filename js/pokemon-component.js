class PokemonComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const pokemonName = this.getAttribute('name');
        const pokemonImage = this.getAttribute('image');
        const pokemonLevel = this.getAttribute('level'); // Opzionale
        const pokemonType1 = this.getAttribute('type1');
        const pokemonType2 = this.getAttribute('type2') || 'none';

        // Link the external CSS
        const linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'stylesheet');
        linkElement.setAttribute('href', '/css/components/pokemon-component.css');

        this.shadowRoot.appendChild(linkElement);
        this.render(pokemonName, pokemonImage, pokemonLevel, pokemonType1, pokemonType2);
    }

    render(name, image, level, type1, type2) {

        const levelHTML = level ? `<span class="pokemon-level">lvl. ${level}</span>` : '';

        this.shadowRoot.innerHTML += `
            <div class="pokemon-item">
                <img src="${image}" alt="${name}" class="pokemon-image">
                <span class="pokemon-name">${name}</span>
                ${levelHTML} <!-- viene visualizzato solo se il livello viene specificato -->
                <div class="pokemon-types">
                    <div class="pokemon-type" title="${type1}" style="background-color: ${this.getTypeColor(type1)};"></div>
                    <div class="pokemon-type" title="${type2}" style="background-color: ${this.getTypeColor(type2)};"></div>
                </div>
            </div>
        `;
    }

    getTypeColor(type) {
        const typeColors = {
            normal: '#F6F7EB', fire: '#E94F37', water: '#0066FF',
            electric: '#FFD200', grass: '#88D18A', ice: '#02CEFF',
            fighting: '#B10F2E', poison: '#44344F', ground: '#D5BDAF',
            flying: '#1E96FC', psychic: '#FF99C9', bug: '#92977E',
            rock: '#E7DFC6', ghost: '#424874', dragon: '#A177FF',
            dark: '#160F29', steel: '#DBDBDB', fairy: '#E34A6F',
            none: '#FFFFFF00'
        };
        return typeColors[type.toLowerCase()] || '#000000';
    }
}

customElements.define('pokemon-component', PokemonComponent);
