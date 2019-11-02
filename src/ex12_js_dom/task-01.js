const array = ['asset/squirrel.jpg', 'asset/squirrel-first.jpg', 'asset/mount.jpg', 'asset/flowers.jpg', 'asset/field.jpg'];
const firstImg = document.querySelector('.first-img');
firstImg.setAttribute('src', array[0]);
const secondImg = document.querySelector('.second-img');
secondImg.setAttribute('src', array[1]);
const imgBox = document.querySelector('#second-img-wrapper');
const slider = document.querySelector('.slider-wrapper');
slider.addEventListener('click', initImg);

let next = 0;
let prev = 1;

function counter(target) {
    if (target === 'next-btn') {
        next = next >= array.length - 1 ? next = 0 : next += 1;
        prev = prev >= array.length - 1 ? prev = 0 : prev += 1;
    } else if (target === 'prev-btn') {
        next = next === 0 ? next = array.length - 1 : next -= 1;
        prev = prev === 0 ? prev = array.length - 1 : prev -= 1;
    }
}

function initImg(e) {
    if (e.target.id === 'next-btn' || e.target.id === 'prev-btn') {
        firstImg.classList.add('opacity');
        setTimeout(() => {
            firstImg.setAttribute('src', array[next]);
            secondImg.setAttribute('src', array[prev]);
            firstImg.classList.remove('opacity');
        }, 500);
        counter(e.target.id);
    }
}