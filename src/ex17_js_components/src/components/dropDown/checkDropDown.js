import { ready, inProgress, finished } from '../../front-utils/constants.js'

export function checkDropDown(state) {
    const titles = [backlog, ready, inProgress, finished];
    for (let i = 0; i < titles.length; i++) {
        if (titles[i].querySelector('.btn-on')) {
            continue
        } else {
            titles[i].querySelector('.btn').disabled = state;
        }
    }
}