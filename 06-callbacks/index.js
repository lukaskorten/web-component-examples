import './component.js';

const toggle = document.querySelector('#toggle');
const input = document.querySelector('#value');
const main = document.querySelector('main');

toggle.addEventListener('change', e => {
    if (e.target.checked) {
        main.appendChild(document.createElement('my-component'));
    } else {
        main.removeChild(document.querySelector('my-component'));
    }
});

input.addEventListener('change', e => {
    const component = document.querySelector('my-component');
    if (component) {
        component.setAttribute('foo', e.target.value);
    } 
});