class SwCharacterDetail extends HTMLElement {

    get character() {
        return this._character;
    }

    set character(value) {
        this._character = value;
        this._render();
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    _render() {
        this.shadowRoot.innerHTML = /*html*/`
            <style>
                div {
                    padding: 2rem;
                    border: 1px solid black;
                }

                dl {
                    padding: 0;
                    margin: 0;
                }

                dt {
                    font-weight: bold;
                    display: inline;
                }

                dd {
                    display: inline;
                    margin-inline-start: 0.5rem;
                }
            </style>
            <div>
                <h2>${this.character.name}</h2>
                <dl>
                    <dt>Größe:</dt>
                    <dd>${this.character.height}</dd><br>
                    <dt>Gewicht:</dt>
                    <dd>${this.character.mass}</dd><br>
                    <dt>Geburtsjahr:</dt>
                    <dd>${this.character.birth_year}</dd>
                </dl>
            </div>
        `;
    }

}

customElements.define('sw-character-detail', SwCharacterDetail);