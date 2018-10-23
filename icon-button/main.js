class IconButton extends HTMLButtonElement {
    constructor() {
      super();      

      const wrapper = document.createElement('span');
      wrapper.setAttribute('class', 'wrapper');

      const iconType = this.getAttribute('icon-type');
      const icon = this.getAttribute('icon');

      const popup = document.createElement('span');
      wrapper.setAttribute('class', 'pop-up');
      popup.innerHTML = this.innerHTML;
      this.innerHTML = `<i class="${iconType} fa-${icon}"></i>`;

      const style = document.createElement('style');
      style.textContent = `
        
        .wrapper {
            position: relative;            
        }

        .pop-up {
            position: absolute;
            padding: 15px;
            border: 1px solid #ddd;

        }
      `;

      document.head.appendChild(style);  
      wrapper.appendChild(popup);
      this.appendChild(wrapper);
      


    }

    get icon() {
        return this.getAttribute('icon');
    }

    set icon(newValue) {
        this.setAttribute('icon', newValue);
    }

    get iconType() {
        return this.getAttribute('icon-type');
    }

    set iconType(newValue) {
        this.setAttribute('icon-type', newValue);
    }

    static get observedAttributes() {
        return ['icon', 'icon-type'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        switch (name) {
            case 'icon':
            console.log(`Icon changed from ${oldValue} to ${newValue}`);
            break;
            case 'icon-type':
            console.log(`Icon-Type changed from ${oldValue} to ${newValue}`);
            break;
        }
    }
  
    
  }
  
  customElements.define('icon-button', IconButton, {extends: 'button'});