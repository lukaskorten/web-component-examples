const template = document.createElement('template');
template.innerHTML = `<p></p>`;

class MyComponent extends HTMLElement {

    set name(value) {
        this._name = name;
        this.nameElement.innerText = this._name;
    }

    get name() {
        return this._name;
    }

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.nameElement = this.shadowRoot.querySelector('p');
    }

}

customElements.define('my-component', MyComponent);