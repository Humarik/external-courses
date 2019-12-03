export function getBlockByTitle(title) {
    const block = document.querySelector('.' + title).querySelector('.box');
    return block;
}