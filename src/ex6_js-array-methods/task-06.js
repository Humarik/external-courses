function reduce(array, callback, initialValue){
    let previousValue;
    if (initialValue !== undefined) {
        previousValue = initialValue;
    } else {
        previousValue = array[0];
    }
    let i = previousValue === array[0] ? 1 : 0;
    for (i; i < array.length; i++) {
        previousValue = callback(previousValue, array[i], i, array);
    }
    return previousValue;
}
module.exports = reduce;