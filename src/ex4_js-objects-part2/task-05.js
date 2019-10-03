function findSameString(firstStr,secondStr){
    if (firstStr.indexOf(secondStr) !== -1) {
        return true;
    }
    return false;
}
module.exports = findSameString;