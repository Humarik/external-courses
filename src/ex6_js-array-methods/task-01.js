function slice(array, begin, end) {
    const newArr = [];
    if (begin === undefined && end === undefined) {
        for (let i = 0; i < array.length; i++) {
            newArr.push(array[i]);
        }
    }
    if (begin < 0 && end < 0) {
        let firstIndex = array.length - begin * -1;
        let secontIndex = array.length - (end - 1) * -1;
        for (firstIndex; firstIndex <= secontIndex; firstIndex++) {
            newArr.push(array[firstIndex]);
        }
    }
    if (begin < 0 && end === undefined) {
        const firstIndex = array.length - begin * -1;
        for (let i = firstIndex; i < array.length; i++) {
            newArr.push(array[i]);
        }
    }
    if (begin > 0 && end > 0) {
        for (let i = begin; i < end; i++) {
            newArr.push(array[i]);
        }
    }
    if (begin > 0 && end === undefined) {
        for (let i = begin; i < array.length; i++) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
module.exports = slice;