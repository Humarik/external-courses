import { ready, inProgress, finished } from '../../front-utils/constants.js';
import { initCard } from '../../front-utils/initCard.js';
import { dataMock, cash } from '../../front-utils/data.js';

export function initSwitchedCard(e) {
    if (e.target.className === 'dd-item' || e.target.className === 'dd-link') {
        const target = e.target.className === 'dd-item' ? e.target : e.target.parentNode;
        const id = e.target.id;
        cash[0].title = e.currentTarget.id;
        cash[0].issues = [...cash[0].issues, { id: id, name: target.innerText }];
        e.currentTarget.querySelector('.back-btn').disabled = false;
        e.currentTarget.querySelector('.back-btn').style.background = 'url' + '(kanban-img/left-arrow.svg)';
        if (e.currentTarget.id === 'ready') {
            switchCard(dataMock, 0, id, target);
        } else if (e.currentTarget.id === 'in-progress') {
            switchCard(dataMock, 1, id, target);
        } else if (e.currentTarget.id === 'finished') {
            switchCard(dataMock, 2, id, target);
        }
    }
}

function switchCard(array, i, id, target) {
    const selectedIssue = array[i].issues.find(issue => issue.id == id);

    array[i].issues = array[i].issues.filter(issue => issue !== selectedIssue);
    array[i + 1].issues = [...array[i + 1].issues, selectedIssue];

    localStorage.setItem('key', JSON.stringify(array));
    initCard(JSON.parse(localStorage.getItem('key')));
    target.remove(target);
}

// ready.addEventListener('click', initSwitchedCard);
// inProgress.addEventListener('click', initSwitchedCard);
// finished.addEventListener('click', initSwitchedCard);