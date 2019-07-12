const template = document.createElement('template');
template.innerHTML = `<p></p>`;

class MyComponent extends HTMLElement {

    static get observedAttributes() {
        return ['title'];
    }

    set title(value) {
        this._title = value;
        this.titleElement.innerText = this._title;
    }

    get title() {
        return this._title;
    }

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.titleElement = this.shadowRoot.querySelector('p');
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (attrName === 'title') {
            this.title = newValue;
        }
    }

}

customElements.define('my-component', MyComponent);