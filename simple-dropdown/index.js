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
        right: 0;
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

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.button = this.shadowRoot.querySelector('button');
        this.button.addEventListener('click', () => this.toggle());

        this.content = this.shadowRoot.querySelector('div.content');
        this.content.style.display = 'none';
    }

    toggle() {
        const show = this.content.style.display === 'block';
        this.content.style.display = show ? 'none' : 'block';
    }

}

customElements.define('my-dropdown', MyDropdown);