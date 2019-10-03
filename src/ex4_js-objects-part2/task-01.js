
function findProp(prop, obj) {
    if (!obj.hasOwnProperty(prop)) {
        return obj[prop];
    }
    return undefined;
}
module.exports = findProp;