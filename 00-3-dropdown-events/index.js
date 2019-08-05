import './component.js';

const dropdown = document.querySelector('my-dropdown');
dropdown.title = 'I am the new dropdown label';
dropdown.addEventListener('toggle', event => console.log(event));