function findProp(prop, obj) {
    return !obj.hasOwnProperty(prop) ? obj[prop] : undefined;
}
module.exports = findProp;