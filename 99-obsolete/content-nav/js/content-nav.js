export class ContentNav extends HTMLElement {
    constructor() {
        super();
        
        const shadow = this.attachShadow({ mode: 'open' });
        this.list = document.createElement('ul');
        shadow.appendChild(this.list);
    }

    connectedCallback() {
        const contentId = this.getAttribute('for');
        const content = document.getElementById(contentId);

        const h1Elemenets = content.getElementsByTagName('h1');
        const h2Elemenets = content.getElementsByTagName('h2');

        Array.prototype.forEach.call(h1Elemenets, (el) => { 
            const h1ListItem = document.createElement('li');
            let list;
            h1ListItem.innerText = el.innerText;
            this.list.appendChild(h1ListItem);
            
            let sibling = el.nextElementSibling;
            while(sibling) {
                if (sibling.tagName.toLowerCase() === 'h1') {
                    break;
                }
                if (sibling.tagName.toLowerCase() === 'h2') {
                    if (!list) {
                        list = document.createElement('ul');
                        h1ListItem.appendChild(list);
                    }
                    const h2ListItem = document.createElement('li');
                    h2ListItem.innerText = sibling.innerText;
                    list.appendChild(h2ListItem);
                }         
                sibling = sibling.nextElementSibling;
            }
        });
        console.log(h1Elemenets);
        console.log(h2Elemenets);
    }
}

customElements.define('content-nav', ContentNav);