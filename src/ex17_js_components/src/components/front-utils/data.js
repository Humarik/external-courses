export const dataMock = JSON.parse(localStorage.getItem('key')) ||
    [
        { title: 'backlog', issues: [] },
        { title: 'ready', issues: [] },
        { title: 'in-progress', issues: [] },
        { title: 'finished', issues: [] }
    ];

export const cash = [{ title: '', issues: [] }];