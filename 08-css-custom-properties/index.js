const template =  document.createElement('template');
template.innerHTML = `
    <style>
        :host {
            --color: blue;
        }

        div {
            margin: 1rem;
            padding: 1rem;
            border-radius: 4px;
            border: 1px solid var(--color);
            color: var(--color);
            background: white;
        }
    </style>

    <div>
        I'm a div in a web component that can have custom styles
    </div>
`;

class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-component', MyComponent);