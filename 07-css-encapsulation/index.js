const template =  document.createElement('template');
template.innerHTML = `
    <style>
        p {
            color: red;
        }
    </style>

    <p>I'm a red paragraph in a web component</p>
`;

class MyComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('my-component', MyComponent);