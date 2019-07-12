const template = document.createElement('template');
template.innerHTML = `
<style>
    .dropdown {
        position: relative;
        display: inline-block;
        font-family: sans-serif;
    }
    
    button {
        padding: 10px 15px;
        background: white;
        border: 1px solid #666;
        border-radius: 4px;
    }
    
    .content {
        position: absolute;
        top: 100%;
        left: 0;
        min-width: 150px;
        margin-top: 5px;
        padding: 10px 15px;
        background: white;
        border: 1px solid #666;
        border-radius: 4px;
    }
</style>
<div class="dropdown">
    <button class="toggle">Dropdown</button>
    <div class="content">
        <slot></slot>
    </div>
</div>

`;

class MyDropdown extends HTMLElement {

    get title() {
        return this._title;
    }

    set title(value) {
        this._title = value;
        this.buttonElement.innerText = this._title;
    }

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.buttonElement = this.shadowRoot.querySelector('button');
        this.buttonElement.addEventListener('click', () => this.toggle());

        this.contentElement = this.shadowRoot.querySelector('div.content');
        this.contentElement.style.display = 'none';
    }

    toggle() {
        const show = this.contentElement.style.display === 'none';
        this.contentElement.style.display = show ? 'block' : 'none';
    }

}

customElements.define('my-dropdown', MyDropdown);