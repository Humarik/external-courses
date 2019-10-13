function roundNumber(firstNumb, secondNumb) {
    let sum = firstNumb + secondNumb;
    return +sum.toFixed(3);
}
module.exports = roundNumber;