function counterLetters(str) {
    const arr = str.split('');
    const counter = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in counter) {
            counter[arr[i]]++;
        } else {
            counter[arr[i]] = 1;
        }
    }
    for (let key in counter ) {
        console.log(key + ': ' + counter[key]);
    }
}
module.exports = counterLetters;