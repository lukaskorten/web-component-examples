const template = document.createElement('template');
template.innerHTML = `
<style>
    .card {
        padding: 15px;
        border: 1px solid #eee;
    }
    
    .card-header {
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
    }
</style>
<div class="card">
    <div class="card-header">
        <slot name="header"></slot>
    </div>
    <div class="card-body">
        <slot></slot>
    </div>
</div>

`;

class MyComponent extends HTMLElement {

    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

customElements.define('my-component', MyComponent);