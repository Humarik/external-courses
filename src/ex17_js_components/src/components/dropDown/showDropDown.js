import { getStyle } from '../front-utils/getStyle.js'
import { initPlaceUl } from '../front-utils/initPlaceUl.js'
import { checkDropDown } from './checkDropDown.js'
import { checkTasks } from '../add-card-btn/checkTasks.js'
import { dataMock, cash } from '../front-utils/data.js'
import { checkStateBack } from './back-btn/getBackTask.js'

export function showDropDown(e) {
    const blockDropDown = e.currentTarget.querySelector('.drop-down-wrapper');
    const scrollDiv = e.currentTarget.querySelector('.wrap');
    const target = e.target;
    if (e.target.classList.contains('btn')) {
        getStyle(blockDropDown, 'block', target, 'Save card', 'btn', 'btn-on');
        initPlaceUl(e.currentTarget.id, blockDropDown.querySelector('.drop-down'));
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
        checkDropDown(true);
    } else if (e.target.classList.contains('btn-on')) {
        getStyle(blockDropDown, 'none', target, 'Add card', 'btn-on', 'btn');
        checkDropDown(false);
        checkTasks(dataMock);
        cash[0] = { title: '', issues: [] };
        checkStateBack(e.currentTarget);
    }
}