function copyObject(obj){
    const copyObj = Object.assign({}, obj);
    return copyObj;
}
module.exports = copyObject;