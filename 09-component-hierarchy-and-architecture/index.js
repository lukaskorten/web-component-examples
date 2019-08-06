import './character-list.js';
import './character-detail.js';

const characterListComponent = document.querySelector('sw-character-list');
const characterDetailComponent = document.querySelector('sw-character-detail');

characterListComponent.addEventListener('selectcharacter', event => {
    characterDetailComponent.character = event.detail;
});

fetch('https://swapi.co/api/people/')
    .then(response => response.json())
    .then(data => {
        characterListComponent.characters = data.results;
        characterDetailComponent.character = data.results[0];
    });