class IconButton extends HTMLButtonElement {
    constructor() {
      super();
      
      const iconType = this.getAttribute('icon-type');
      const icon = this.getAttribute('icon');

      const popup = document.createElement('span');
      popup.setAttribute('class', 'pop-up');
      popup.innerHTML = this.innerHTML;
      this.innerHTML = '';

      const iconTag = document.createElement('i');
      iconTag.setAttribute('class', `fa${iconType} fa-${icon}`);
      
      this.appendChild(iconTag);
      this.appendChild(popup);

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
    
    
  }
  
  customElements.define('icon-button', IconButton, {extends: 'button'});