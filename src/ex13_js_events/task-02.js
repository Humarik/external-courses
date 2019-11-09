const userBlock = document.querySelector('.user-container-wrapper');
const UserMenu = document.querySelector('.menu-user-wrapper');

userBlock.addEventListener('click', showUserMenu);
function showUserMenu(){
    const arrowUserBtn = document.querySelector('.line-btn-off');
    UserMenu.classList.toggle('show-user-menu');
    arrowUserBtn.classList.toggle('line-btn-on');
}