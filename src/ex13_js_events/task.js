const backlog = document.querySelector('.backlog');
const ready = document.querySelector('.ready');
const inProgress = document.querySelector('.in-progress');
const finished = document.querySelector('.finished');

const backlogContainer = document.querySelector('.box');
const blockInput = document.querySelector('.create-wrapper');
const taskInput = document.querySelector('.input-create');

const containerDropDown = document.querySelector('.drop-down');

const dataMock = JSON.parse(localStorage.getItem('key')) || 
[
    { title: 'backlog', issues: [] },
    { title: 'ready', issues: [] },
    { title: 'in-progress', issues: [] },
    { title: 'finished', issues: [] }
];
const cash = [{ title: '', issues: [] }];

function checkDropDown (state){
    let array = [backlog, ready, inProgress, finished];
    for (let i = 0; i < array.length; i++){
        if(array[i].querySelector('.btn-on')){
            continue
        }else{
            array[i].querySelector('.btn').disabled = state;
        }
    }
}

function checkTasks(array){
    array.forEach( (item) => {
        if (item.title === 'backlog'){
            ready.querySelector('.btn').disabled = item.issues.length === 0 
            ? true : false;
        } else if (item.title === 'ready'){
            inProgress.querySelector('.btn').disabled = item.issues.length === 0 
            ? true : false;
        } else if (item.title === 'in-progress'){
            finished.querySelector('.btn').disabled = item.issues.length === 0 
            ? true : false;
        }
    })
}

function getId(){
    let newId = Math.random();
    let isId = false;
    for(let i = 0; i < dataMock.length; i++){
        if (isId){
           getId();
        }else{
            isId = dataMock[i].issues.some(item => {
                return item.id == newId;
            })
        }
    }
    return newId;
}

function addCard(){
    if (taskInput.value){
        if (localStorage.getItem('key') === null){
            dataMock[0].issues.push({ id: getId(), name: taskInput.value });
            localStorage.setItem('key', JSON.stringify(dataMock));
            initCard(dataMock);
        }else{
            dataMock[0].issues.push({ id: getId(), name: taskInput.value })
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
        checkDropDown(true);
    } else if (target.classList.contains('btn-on')){
        blockInput.style.display = 'none';
        target.innerHTML = 'Add card';
        target.classList.toggle('btn-on');
        target.classList.toggle('btn');
        checkDropDown(false);
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

function getBlockByTitle(title){
    const block = document.querySelector('.' + title).querySelector('.box');
    return block;
}

function initCard(array){
    array.forEach((element) => createCard(element.issues, getBlockByTitle( element.title )));
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
    const scrollDiv = e.currentTarget.querySelector('.wrap');
    const target = e.target;
    if (e.target.classList.contains('btn')) {
        blockDropDown.style.display = 'block';
        target.innerHTML = 'Save card';
        target.classList.toggle('btn');
        target.classList.toggle('btn-on');
        initPlaceUl(e.currentTarget.id, blockDropDown.querySelector('.drop-down'));
        scrollDiv.scrollTop = scrollDiv.scrollHeight;
        checkDropDown(true);
    } else if (e.target.classList.contains('btn-on')) {
        blockDropDown.style.display = 'none';
        target.innerHTML = 'Add card';
        target.classList.toggle('btn-on');
        target.classList.toggle('btn');
        checkDropDown(false);
        checkTasks(dataMock);
        cash[0].title = '';
        cash[0].issues.length = 0;
    }
}

function getBackTask (i, parent, block){
    let arr = dataMock[i].issues.slice();
    arr.pop();
    dataMock[i - 1].issues = [...dataMock[i - 1].issues, cash[0].issues.pop()];
    dataMock[i].issues = [...arr];
    localStorage.setItem('key', JSON.stringify(dataMock));
    initCard(JSON.parse(localStorage.getItem('key')));
    initPlaceUl(parent, block.querySelector('.drop-down'));
}

function initBackTask (e){
    if (cash[0].issues.length === 0) return;

    const blockDropDown = e.currentTarget.querySelector('.drop-down-wrapper');
    const id = e.currentTarget.id;

    if (e.target.className === 'back-btn'){
        if(cash[0].title === 'ready'){
            getBackTask(1, id, blockDropDown);
        } else if (cash[0].title === 'in-progress'){
            getBackTask(2, id, blockDropDown);
        } else if (cash[0].title === 'finished'){
            getBackTask(3, id, blockDropDown);
        }
    }
}

function switchCard(array, i, id, target){
    const selectedIssue = array[i].issues.find(issue => issue.id == id);

    array[i].issues = array[i].issues.filter(issue => issue !== selectedIssue);
    array[i + 1].issues = [...array[i + 1].issues, selectedIssue];
    
    localStorage.setItem('key', JSON.stringify(array));
    initCard(JSON.parse(localStorage.getItem('key')));
    target.remove(target);
}

function initSwitchedCard(e){
    if (e.target.className === 'dd-item' || e.target.className === 'dd-link'){
        const target = e.target.className === 'dd-item' ? e.target : e.target.parentNode;
        const id = e.target.id;
        cash[0].title = e.currentTarget.id;
        cash[0].issues = [...cash[0].issues, { id: id , name :target.innerText}];
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

checkTasks(dataMock);
backlog.addEventListener('click', showInput);
inProgress.addEventListener('click', showDropDown);
inProgress.addEventListener('click', initSwitchedCard);
inProgress.addEventListener('click', initBackTask);
finished.addEventListener('click', showDropDown);
finished.addEventListener('click', initSwitchedCard);
finished.addEventListener('click', initBackTask);
ready.addEventListener('click', showDropDown);
ready.addEventListener('click', initSwitchedCard);
ready.addEventListener('click', initBackTask);