function deepCopyObj(data) {
    let copyObj = data instanceof Array ? [] : {};
    for (let key in data) {
        if (data[key] instanceof Object) {
            copyObj[key] = deepCopyObj(data[key]);
        } else {
            copyObj[key] = data[key];
        }
    }
    return copyObj;
}
module.exports = deepCopyObj;