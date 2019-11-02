const userBlock = document.querySelector('.user-container-wrapper');
const header = document.querySelector('.header');

userBlock.addEventListener('click', showUserMenu);
function showUserMenu(e){
    const arrowUserBtn = document.querySelector('.line-btn-off');
    if (!e.currentTarget.classList.contains('on')){
        e.currentTarget.classList.toggle('on');
        const ul = document.createElement('ul');
        const div = document.createElement('div');
        const nav = document.createElement('nav');
        arrowUserBtn.classList.toggle('line-btn-on');
        nav.style.background = '#0079bf';
        nav.style.height = '100%';

        for (let i = 0; i < 3; i++) {
            const a = document.createElement('a');
            a.className = 'link';
            const li = document.createElement('li');
            li.className = 'item';
            li.style.padding = '5px';
            li.style.margin = '0px 0px 0px 0px';
            li.appendChild(a);
            switch (i) {
                case 0:
                    a.innerHTML = 'My account';
                    break;
                case 1:
                    a.innerHTML = 'My tasks';
                    break;
                case 2:
                    a.innerHTML = 'Log out';
                    break;
                default:
            }
            ul.appendChild(li);
        }

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
    } else{
        e.currentTarget.classList.toggle('on');
        arrowUserBtn.classList.toggle('line-btn-on');
        e.currentTarget.parentNode.querySelector('.menu-wrapper').remove();
    }
}