import { LitElement, html } from 'lit-element';


class MyComponent extends LitElement {

    static get properties() {
        return {
            name: {type: String}
        }
    }
    
    render() {
        return html`
            <p>Hallo ${this.name}</p>
        `;
    }

}

customElements.define('my-component', MyComponent);