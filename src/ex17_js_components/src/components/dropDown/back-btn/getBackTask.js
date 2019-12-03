import { dataMock, cash } from '../../../front-utils/data.js';
import { initPlaceUl } from  '../../../front-utils/initPlaceUl.js';
import { initCard } from '../../../front-utils/initCard.js';

export function checkStateBack(parent) {
    if (cash[0].issues.length === 0) {
        parent.querySelector('.back-btn').style.background = '';
        parent.querySelector('.back-btn').disabled = true;
    }
}

function getBackTask(i, id, parent) {
    let copyData = dataMock[i].issues.slice();
    copyData.pop();
    dataMock[i - 1].issues = [...dataMock[i - 1].issues, cash[0].issues.pop()];
    dataMock[i].issues = [...copyData];
    localStorage.setItem('key', JSON.stringify(dataMock));
    initCard(JSON.parse(localStorage.getItem('key')));
    initPlaceUl(id, parent.querySelector('.drop-down-wrapper').querySelector('.drop-down'));
    checkStateBack(parent);
}

export function initBackTask(e) {
    if (cash[0].issues.length === 0) return;
    const current = e.currentTarget;
    if (e.target.className === 'back-btn') {
        if (cash[0].title === 'ready') {
            getBackTask(1, current.id, current);
        } else if (cash[0].title === 'in-progress') {
            getBackTask(2, current.id, current);
        } else if (cash[0].title === 'finished') {
            getBackTask(3, current.id, current);
        }
    }
}

// ready.addEventListener('click', initBackTask);
// inProgress.addEventListener('click', initBackTask);
// finished.addEventListener('click', initBackTask);