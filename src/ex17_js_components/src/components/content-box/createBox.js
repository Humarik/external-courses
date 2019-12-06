import { createBtn } from '../add-card-btn/createBtn.js'
import { createDropDown } from '../dropDown/createDropDown.js'

function createBox (){
    const titles = ['backlog', 'ready', 'in-progress', 'finished'];
    titles.reduce((acc, current, index)=>{
        acc = `
            <div class='wrapper ${current}' id='${current}'>
                <div class='title'>
                    <h3>${current[0].toUpperCase() + current.substring(1)}</h3>
                </div>
                <div class='wrap'>
                    <div class='container'>
                        <div class='box'></div>
                        ${index === 0 
                        ? `
                            <div class='create-wrapper'>
                                <input type='text' class='input-create' placeholder='Add card'>
                            </div>
                        ` 
                        : ''}
                        ${index !== 0 
                        ?`
                            <div class='drop-down-wrapper'>
                                ${createDropDown()}
                            </div>
                        `
                        :''}
                        <div class='wrap-btn'>
                            ${createBtn()}
                        </div>
                    </div>
                </div>
            </div>
        `
        return document.querySelector('.main-container').innerHTML += acc;
    }, document.querySelector('.main-container'));
}
createBox();