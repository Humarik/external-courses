function changeLetters(str) {
    const string = str.split(' ');
    let result = [];
    for (let i = 0; i < string.length; i++) {
        result.push(string[i][0].toUpperCase() + string[i].slice(1));
    }
    return result.join(' ');
}
module.exports = changeLetters;