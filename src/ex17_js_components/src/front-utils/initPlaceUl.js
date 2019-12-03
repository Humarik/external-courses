import { createList } from './createList.js'
import { dataMock } from './data.js'
import { ready, inProgress, finished } from './constants.js'

export function initPlaceUl(id, containerDropDown) {
    if (id === 'ready') {
        const ul = createList(dataMock[0].issues, containerDropDown);
        ready.querySelector('.drop-down').appendChild(ul);
    } else if (id === 'in-progress') {
        const ul = createList(dataMock[1].issues, containerDropDown);
        inProgress.querySelector('.drop-down').appendChild(ul);
    } else if (id === 'finished') {
        const ul = createList(dataMock[2].issues, containerDropDown);
        finished.querySelector('.drop-down').appendChild(ul);
    }
}