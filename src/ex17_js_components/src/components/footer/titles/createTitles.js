export function createTitles(parent) {
    const titles = ['Active tasks: &lt; N &gt;', 'Finished tasks: &lt; M &gt;', 'Kanban board by Pavel, 2019']
    titles.reduce((acc, current, index) => {
        if(index === 0){
            acc = `<div class='footer-title active-tasks'> <h2 class='title'> ${current} </h2> </div>`;
            return parent.innerHTML += acc;
        } else if (index === 1){
            acc = `<div class='footer-title finished-tasks'> <h2 class='title'> ${current} </h2> </div>`;
            return parent.innerHTML += acc;
        } else if(index === 2){
            acc = `<div class='footer-title creator'> <h2 class='title'> ${current} </h2> </div>`;
            return parent.innerHTML += acc;
        }
    }, parent);
}