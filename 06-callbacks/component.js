class MyComponent extends HTMLElement {
    
    static get observedAttributes() {
        return ['foo'];
    }
    
    constructor() {
        super();
    }

    connectedCallback() {
        console.log('connected ...');
    }

    disconnectedCallback() {
        console.log('disconnected ...');
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        console.log('attribute changed', newValue);
    }

}

customElements.define('my-component', MyComponent);