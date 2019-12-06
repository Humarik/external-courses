import { createHeader } from '../header/createHeader.js'
import { createMain } from '../main/createMain.js'
import { createFooter } from '../footer/createFooter.js'
import { createTitles } from '../../footer/titles/createTitles.js'

function createHugeContainer(createText){
    document.querySelector('.huge-container').innerHTML = `
        ${createHeader()}
        ${createMain()}
        ${createFooter()}
    `
    createText(document.querySelector('.footer'));
}
createHugeContainer(createTitles)