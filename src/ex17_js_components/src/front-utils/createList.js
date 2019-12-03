export function createList(array, containerDropDown) {
    const container = containerDropDown;
    container.innerHTML = '';
    const ul = document.createElement('ul');
    array.forEach(item => {
        const li = document.createElement('li');
        li.className = 'dd-item';
        li.id = item.id;
        const a = document.createElement('a');
        a.className = 'dd-link';
        a.id = item.id;
        a.innerHTML = item.name;
        li.appendChild(a);
        ul.appendChild(li);
    })
    return ul;
}