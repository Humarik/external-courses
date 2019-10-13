function revertString(str){
    const arr = str.split('');
    let result = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        result += arr[i];
    }
    return result;
}
module.exports = revertString;