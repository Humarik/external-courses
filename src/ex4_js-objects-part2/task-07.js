function shortenString(str, number) {
    const arr = str.split('');
    arr.splice(number - 1);
    arr.push('…');
    return arr.join('');
}
module.exports = shortenString;