const template = document.createElement('template');
template.innerHTML = `
    <style>

        section {
            margin-right: 1rem;
            width: 200px;
        }
        
        button {
            font-size: 1.2em;
            display: block;
            width: 100%;
            padding: 0.75rem 1rem;
            background: white;
            color: black;
            border: 1px solid black;
            margin-bottom: 0.5rem;
            cursor: pointer;
            transition: all 250ms ease-out;
        }

        button:hover, button:active {
            background: black;
            color: white;
        } 
        
    </style>

    <section></section>
`;

class SwCharacterList extends HTMLElement {

    get characters() {
        return this._characters;
    }

    set characters(value) {
        this._characters = value;
        this._render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.sectionElement = this.shadowRoot.querySelector('section');
    }

    _render() {
        this._characters.forEach(character => {
            const button = document.createElement('button');
            button.appendChild(document.createTextNode(character.name));
            button.addEventListener('click', () => {
                this.dispatchEvent(new CustomEvent('selectcharacter', { detail: character }));
            });
            this.sectionElement.appendChild(button);
        });
    }
}

customElements.define('sw-character-list', SwCharacterList);