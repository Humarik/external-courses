import { createMenuBtn } from '../../header/rigth-menu/menu-btn.js'
import { createTitle } from '../../header/title/title.js'
import { createListBtn } from '../../header/newList-btn/createNewListBtn.js'
import { createAvatar } from '../../header/user-avatar/createAcatar.js'
import { createuserBtn } from '../../header/user-btn/createUserBtn.js'
import { createUserMenu } from '../../header/user-menu/createUserMenu.js'

export function createHeader() {
    return `
           <header class='header'>
            <div class='left-container'>
                <div class='btn-menu-wrapper'>
                    <div class='btn-menu-container'>
                    ${createMenuBtn()}
                    </div>
                </div>
                <div class='title-wrapper'>
                    ${createTitle()}
                </div>
            </div>
            <div class='right-container'>
                <div class='add-btn-wrapper'>
                    ${createListBtn()}
                </div>
                <div class='user-container-wrapper'>
                    <div class='user-avatar-wrapper'>
                        <div class='user-avatar-container'>
                            ${createAvatar()}
                        </div>
                    </div>
                    <div class='user-btn-wrapper'>
                        <div class='btn-container'>
                            ${createuserBtn()}
                        </div>
                    </div>
                    <div class='menu-user-wrapper'>
                        <nav class='menu-user-container'>
                            ${createUserMenu()}
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    `
}