function checkPrime(number) {
    let count = 0, result = '';
    if (number > 1000 || number < 2) {
        return 'Данные неверны';
    }
    for (let i = 1; i <= number; i++) {
        if (number % i === 0 || number === 2) {
            if (i <= number) {
                count++;
            }
        }
    }
    if (count > 2) {
        result = 'Число ' + number + ' - составное число';
    } else if (count === 2) {
        result = 'Число ' + number + ' - простое число';
    }
    return result;
}
module.exports = checkPrime;