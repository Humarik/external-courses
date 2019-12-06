export function createCard(item, parent) {
    const parentItem = parent;
    parentItem.innerHTML = '';
    item.forEach(elem => {
        const text = document.createElement('p');
        text.className = 'text';
        text.innerHTML = elem.name;
        const div = document.createElement('div');
        div.id = elem.id;
        div.className = 'card';
        div.appendChild(text);
        parentItem.appendChild(div);
    })
}