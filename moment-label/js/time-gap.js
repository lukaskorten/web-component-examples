
import '/js/moment-with-locales.js';

class ElapsedTimeLabel extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.label = document.createElement('span');
        this.shadowRoot.appendChild(this.label);

    }

    connectedCallback() {
        this.updateElapsedTime();
        this._intervalId = setInterval(this.updateElapsedTime.bind(this), 60000);
    }

    disconnectedCallback() {
        clearInterval(this._intervalId);
    }

    updateElapsedTime() {
        this.label.innerText = this.getElapsedTime();
    }

    getElapsedTime() {
        const givenMoment = moment(this.value);
        const currentMoment = moment();

        if (givenMoment.isSame(currentMoment, 'day')) {
            return givenMoment.locale(this.locale).fromNow();
        } else {
            return givenMoment.locale(this.locale).calendar();
        }
    }

    static get observedAttributes() {
        return ['value', 'locale'];
    }

    set locale(newValue) {
        this.setAttribute('locale', newValue);
    }

    set value(newValue) {
        this.setAttribute('value', newValue);
    }

    get locale() {
        return this.getAttribute('locale');
    }

    get value() {
        return this.getAttribute('value');
    }


}

customElements.define('elapsed-time-label', ElapsedTimeLabel);
