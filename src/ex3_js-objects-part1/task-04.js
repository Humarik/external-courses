function checkObj(str, obj) {
    const thatObj = obj;
    switch (str in thatObj) {
        case false :
            thatObj[str] = 'new';
        break;
        default:
    }
    return thatObj;
}
module.exports = checkObj;