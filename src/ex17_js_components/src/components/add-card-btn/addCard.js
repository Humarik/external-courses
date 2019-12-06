import { getStyle } from '../front-utils/getStyle.js';
import { initCard } from '../front-utils/initCard.js';
import { dataMock } from '../front-utils/data.js';
import { checkTasks } from './checkTasks.js';
import { checkDropDown } from '../dropDown/checkDropDown.js';

const taskInput = document.querySelector('.input-create');
const blockInput = document.querySelector('.create-wrapper');

function getId() {
    let newId = Math.random();
    let isId = false;
    for (let i = 0; i < dataMock.length; i++) {
        if (isId) {
            getId();
        } else {
            isId = dataMock[i].issues.some(item => {
                return item.id == newId;
            })
        }
    }
    return newId;
}

function addCard() {
    if (!taskInput.value) return;
    if (localStorage.getItem('key') === null) {
        dataMock[0].issues.push({ id: getId(), name: taskInput.value });
        localStorage.setItem('key', JSON.stringify(dataMock));
        initCard(dataMock);
    } else {
        dataMock[0].issues.push({ id: getId(), name: taskInput.value })
        localStorage.setItem('key', JSON.stringify(dataMock));
        initCard(dataMock);
    }
    taskInput.value = '';
}

export function showInput(e) {
    const target = e.target;
    if (target.classList.contains('btn')) {
        getStyle(blockInput, 'block', target, 'Save card', 'btn', 'btn-on');
        checkDropDown(true);
    } else if (target.classList.contains('btn-on')) {
        getStyle(blockInput, 'none', target, 'Add card', 'btn-on', 'btn');
        checkDropDown(false);
        addCard();
    }
    checkTasks(dataMock);
}

// backlog.addEventListener('click', showInput);