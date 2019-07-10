const template = document.createElement('template');
template.innerHTML = `<button>Click me</button>`;

class MyComponent extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.shadowRoot.querySelector('button')
            .addEventListener('click', () => this.handleClick());
    }

    handleClick() {
        this.dispatchEvent(new CustomEvent('myClick', { detail: 'Hello World!'} ));
    }

}

customElements.define('my-component', MyComponent);