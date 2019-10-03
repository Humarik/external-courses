function deepCopyObj(data) {
    const copyObj = {};
    for (let key in data) {
        if (data[key] instanceof Object) {
            if (data[key] instanceof Array){
                copyObj[key] = [];
                for (let i = 0; i < data[key].length;i++){
                    copyObj[key].push((deepCopyObj(data[key][i])));
                }
            }else{
                copyObj[key] = deepCopyObj(data[key]);
            }
        } else {
            copyObj[key] = data[key];
        }
    }
    return copyObj;
}
module.exports = deepCopyObj;