function checkObj(str, obj) {
    const thatObject = obj;
    return str in thatObject ? true : (thatObject[str] = 'new');
}
module.exports = checkObj;