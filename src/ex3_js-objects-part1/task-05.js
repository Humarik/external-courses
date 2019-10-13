function copyObject(obj){
    const copyObj = {};
    for (let key in obj) {
        copyObj[key] = obj[key];
    }
    return copyObj;
}
module.exports = copyObject;