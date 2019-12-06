import { showInput } from '../add-card-btn/addCard.js'
import { showDropDown } from '../dropDown/showDropDown.js'
import { initSwitchedCard } from '../add-card-btn/switchCard.js'
import { initBackTask } from '../dropDown/back-btn/getBackTask.js'

export const backlog = document.querySelector('.backlog');
export const ready = document.querySelector('.ready');
export const inProgress = document.querySelector('.in-progress');
export const finished = document.querySelector('.finished');

backlog.addEventListener('click', showInput);
inProgress.addEventListener('click', showDropDown);
inProgress.addEventListener('click', initSwitchedCard);
inProgress.addEventListener('click', initBackTask);
finished.addEventListener('click', showDropDown);
finished.addEventListener('click', initSwitchedCard);
finished.addEventListener('click', initBackTask);
ready.addEventListener('click', showDropDown);
ready.addEventListener('click', initSwitchedCard);
ready.addEventListener('click', initBackTask);