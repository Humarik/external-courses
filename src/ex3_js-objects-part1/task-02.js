function showObjElem(obj) {
    for (key in obj){
        console.log(key + ' ' + obj[key]);
    }
}
module.exports = showObjElem;