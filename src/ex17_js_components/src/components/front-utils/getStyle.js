export function getStyle (block, state, button, text, firstClass, secondClass) {
    block.style.display = state;
    button.innerHTML = text;
    button.classList.toggle(firstClass);
    button.classList.toggle(secondClass);
}