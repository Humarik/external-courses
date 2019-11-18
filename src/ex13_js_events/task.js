
const backlog = document.querySelector('.backlog');
const ready = document.querySelector('.ready');
const inProgress = document.querySelector('.in-progress');
const finished = document.querySelector('.finished');

const backlogContainer = document.querySelector('.box');
const blockInput = document.querySelector('.create-wrapper');
const taskInput = document.querySelector('.input-create');

const blockDropDown = document.querySelector('.drop-down-wrapper');
const containerDropDown = document.querySelector('.drop-down');

const dataMock = JSON.parse(localStorage.getItem('key')) || 
[
    { title: 'backlog', issues: [] },
    { title: 'ready', issues: [] },
    { title: 'in-progress', issues: [] },
    { title: 'finished', issues: [] }
];

checkTasks(dataMock);
function checkTasks(array){
    array.some( (item) => {
        if (item.title === 'backlog'){
            ready.querySelector('.btn').disabled = item.issues.length === 0 ? true : false;
        } else if (item.title === 'ready'){
            inProgress.querySelector('.btn').disabled = item.issues.length === 0 ? true : false;
        } else if (item.title === 'in-progress'){
            finished.querySelector('.btn').disabled = item.issues.length === 0 ? true : false;
        }
    })
}


backlog.addEventListener('click', showInput);
inProgress.addEventListener('click', showDropDown);
inProgress.addEventListener('click', initSwitchedCard);
finished.addEventListener('click', showDropDown);
finished.addEventListener('click', initSwitchedCard);
ready.addEventListener('click', showDropDown);
ready.addEventListener('click', initSwitchedCard);


function addCard(){
    if (taskInput.value){
        if (localStorage.getItem('key') === null){
            dataMock[0].issues.push({ id: Math.random(), name: taskInput.value });
            localStorage.setItem('key', JSON.stringify(dataMock));
            initCard(dataMock);
        }else{
            dataMock[0].issues.push({ id: Math.random(), name: taskInput.value })
            localStorage.setItem('key', JSON.stringify(dataMock));
            initCard(dataMock);
        }
        taskInput.value = '';
    }
    checkTasks(dataMock);
}

function showInput(e){
    const target = e.target;
    if (target.classList.contains('btn')) {
        blockInput.style.display = 'block';
        target.innerHTML = 'Save card';
        target.classList.toggle('btn');
        target.classList.toggle('btn-on');
    } else if (target.classList.contains('btn-on')){
        blockInput.style.display = 'none';
        target.innerHTML = 'Add card';
        target.classList.toggle('btn-on');
        target.classList.toggle('btn');
        addCard();
    }
}

function createCard(item,parent){
    const parentItem = parent;
    parentItem.innerHTML = '';
    item.forEach(elem =>{
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
function initCard(array){
    const readyBlock = ready.querySelector('.box');
    const backlogBlock = backlog.querySelector('.box');
    const progressBlock = inProgress.querySelector('.box');
    const finishBlock = finished.querySelector('.box');

    array.forEach(element => {
        if (element.title === 'backlog'){
            createCard(element.issues, backlogBlock);
        } 
        else if (element.title === 'ready'){
            createCard(element.issues, readyBlock);
        } else if (element.title === 'in-progress'){
            createCard(element.issues, progressBlock);
        }
        else if (element.title === 'finished') {
            createCard(element.issues, finishBlock);
        }
    });
}

function createList(array, containerDropDown){
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

function initPlaceUl(id, containerDropDown){
    if(id === 'ready'){
        const ul = createList(dataMock[0].issues, containerDropDown);
        ready.querySelector('.drop-down').appendChild(ul);
    }else if(id === 'in-progress'){
        const ul = createList(dataMock[1].issues, containerDropDown);
        inProgress.querySelector('.drop-down').appendChild(ul);
    } else if (id === 'finished'){
        const ul = createList(dataMock[2].issues, containerDropDown);
        finished.querySelector('.drop-down').appendChild(ul);
    }
}

function showDropDown(e){
    const blockDropDown = e.currentTarget.querySelector('.drop-down-wrapper');
    const containerDropDown = e.currentTarget.querySelector('.drop-down');
    const scrollDiv = e.currentTarget.querySelector('.wrap');
    const target = e.target;
    if (e.target.classList.contains('btn')) {
        blockDropDown.style.display = 'block';
        target.innerHTML = 'Save card';
        target.classList.toggle('btn');
        target.classList.toggle('btn-on');
        initPlaceUl(e.currentTarget.id, containerDropDown);
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
    } else if (e.target.classList.contains('btn-on')) {
        blockDropDown.style.display = 'none';
        target.innerHTML = 'Add card';
        target.classList.toggle('btn-on');
        target.classList.toggle('btn');
        checkTasks(dataMock);
    }
}

function switchCard(array, i, id, target){
        array[i].issues.some((item,index) =>{
        if (item.id == id){
            array[i + 1].issues.push(item);
            array[i].issues.splice(index, 1);
            localStorage.setItem('key', JSON.stringify(array));
            initCard(JSON.parse(localStorage.getItem('key')));
            target.remove(target);
        }
    })
}

function initSwitchedCard(e){
    if (e.target.className === 'dd-item' || e.target.className === 'dd-link'){
        const target = e.target.className === 'dd-item' ? e.target : e.target.parentNode;
        const id = e.target.id;
        if(e.currentTarget.id === 'ready'){
            switchCard(dataMock, 0, id, target);
        }else if(e.currentTarget.id === 'in-progress'){
            switchCard(dataMock, 1, id, target);
        }else if (e.currentTarget.id === 'finished'){
            switchCard(dataMock, 2, id, target);
        }
    }
}

if(localStorage.getItem('key') !== null){
    initCard(JSON.parse(localStorage.getItem('key')));
}