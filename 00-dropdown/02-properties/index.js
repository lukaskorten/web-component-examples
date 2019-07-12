import './component.js';

const dropdown = document.querySelector('my-dropdown');
dropdown.title = 'I am the new dropdown label';

setTimeout(() => dropdown.title = 'Another label', 3000);