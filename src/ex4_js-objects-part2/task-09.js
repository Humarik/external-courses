function modifyString(firstStr,secondStr,number){
    let arr = firstStr.split(' ');
    arr.splice(number + 1, 0, secondStr);
    return arr.join(' ');
}
module.exports = modifyString;