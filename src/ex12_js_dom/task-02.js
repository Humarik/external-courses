const userBlock = document.querySelector('.user-container-wrapper');
const header = document.querySelector('.header');
const titles = ['My account', 'My tasks', 'Log out'];

function createLi (text) {
    const a = document.createElement('a');
    a.className = 'link';
    a.innerHTML = text;
    const li = document.createElement('li');
    li.className = 'item';
    li.style.padding = '5px';
    li.style.margin = '0';
    li.appendChild(a);
    return li;
}

userBlock.addEventListener('click', showUserMenu);
function showUserMenu (e){
    const arrowUserBtn = document.querySelector('.line-btn-off');
    if (!e.currentTarget.classList.contains('on')) {
        e.currentTarget.classList.toggle('on');
        const ul = document.createElement('ul');
        const div = document.createElement('div');
        const nav = document.createElement('nav');
        arrowUserBtn.classList.toggle('line-btn-on');
        nav.style.background = '#0079bf';
        nav.style.height = '100%';

        titles.reduce((acc, currentValue) => {
            acc = createLi(currentValue);
            return ul.appendChild(acc);
        }, ul);

        div.className = 'menu-wrapper';
        div.style.position = 'absolute';
        div.style.display = 'block';
        div.style.top = '60px';
        div.style.right = '0px';
        div.style.width = '150px';
        div.style.height = '120px';
        div.style.border = '1px solid grey';
        div.style.padding = '2px 4px';
        div.style.background = 'white';
        div.appendChild(nav);
        nav.appendChild(ul);
        header.appendChild(div);
    } else {
        e.currentTarget.classList.toggle('on');
        arrowUserBtn.classList.toggle('line-btn-on');
        e.currentTarget.parentNode.querySelector('.menu-wrapper').remove();
    }
}