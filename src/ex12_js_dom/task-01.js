const images = ['asset/squirrel.jpg', 'asset/squirrel-first.jpg', 'asset/mount.jpg', 'asset/flowers.jpg', 'asset/field.jpg'];

let firstImg = document.querySelector('.first-img');
firstImg.setAttribute('src', images[0]);

let secondImg = document.querySelector('.second-img');
secondImg.setAttribute('src', images[1]);

const slider = document.querySelector('.slider-wrapper');

let next = 0;
let prev = 1;

function counter(className) {
    if (className === 'next-btn btn-slider') {
        next = next >= images.length - 1 ? next = 0 : next += 1;
        prev = prev >= images.length - 1 ? prev = 0 : prev += 1;
    } else if (className === 'prev-btn btn-slider') {
        next = next === 0 ? next = images.length - 1 : next -= 1;
        prev = prev === 0 ? prev = images.length - 1 : prev -= 1;
    }
}

function initImg(e) {
    const target = e.target;
    if (!target.classList.contains('prev-btn') && !target.classList.contains('next-btn')) return;
    firstImg.classList.remove('opacity');
    let image = firstImg;
    let newImage = image.cloneNode(false);
    image.parentNode.replaceChild(newImage, image);
    firstImg = newImage;

    secondImg.classList.remove('opacity');
    image = secondImg;
    newImage = image.cloneNode(false);
    image.parentNode.replaceChild(newImage, image);
    secondImg = newImage;

    counter(target.className);
    firstImg.classList.add('opacity');
    secondImg.classList.add('opacity');
    firstImg.setAttribute('src', images[next]);
    secondImg.setAttribute('src', images[prev]);
}

slider.addEventListener('click', initImg);