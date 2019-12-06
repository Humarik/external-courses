import { ready, inProgress, finished} from '../front-utils/constants.js';
import { dataMock } from '../front-utils/data.js';

export function checkTasks(array) {
    array.forEach( (item) => {
        if (item.title === 'backlog') {
            ready.querySelector('.btn').disabled = item.issues.length === 0 
            ? true : false;
        } else if (item.title === 'ready') {
            inProgress.querySelector('.btn').disabled = item.issues.length === 0 
            ? true : false;
        } else if (item.title === 'in-progress') {
            finished.querySelector('.btn').disabled = item.issues.length === 0 
            ? true : false;
        }
    })
}
checkTasks(dataMock);