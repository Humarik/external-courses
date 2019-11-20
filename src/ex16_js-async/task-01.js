function load(url, init) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        const initType = init.type.toLowerCase() === 'post' ? init.document : null;
        xhr.open(init.type, url);
        xhr.send(initType);
        xhr.addEventListener('load', () => {
            resolve(xhr.response);
        });
        xhr.addEventListener('error', () => {
            reject(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        });
    });
};
load('http://httpbin.org/post', { type: 'POST', document: document })
.then((response) => {
    console.log(response);
})
.catch((response) => {
    console.log(response);
})