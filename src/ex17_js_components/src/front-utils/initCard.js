import { createCard } from './createCard.js';
import { getBlockByTitle } from './getBlockByTitle.js';

function drawTasks() {
    if (localStorage.getItem('key') !== null) {
        initCard(JSON.parse(localStorage.getItem('key')));
    }
    return;
}
drawTasks();

export function initCard(array) {
    array.forEach((element) => createCard(element.issues, getBlockByTitle(element.title)));
}