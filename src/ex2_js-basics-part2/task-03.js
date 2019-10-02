function counterNumbers(array) {
    let even = 0, odd = 0, zero = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number' && !isNaN(array[i]) && array[i] !== 0) {
            if (array[i] % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        } else if (array[i] === 0) {
            zero++;
        }
    }      
    return [even, odd, zero];
}
module.exports = counterNumbers;