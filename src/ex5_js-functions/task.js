const Calculator = (function () {
    let result = 0;
    const getResult = function () {
        return result;
    }
    const reset = function () {
        result = 0;
        return result;
    }
    const add = function (number) {
        if (number !== undefined) {
            result += number;
        }
        return add;
    }
    add.toString = function () {
        return result;
    }
    const subtract = function (number) {
        if (number !== undefined) {
            result -= number;
        }
        return subtract;
    }
    subtract.toString = function () {
        return result;
    }
    const divide = function (number) {
        if (number !== undefined) {
            result /= number;
        }
        return divide;
    }
    divide.toString = function () {
        return result;
    }
    const multiply = function (number) {
        if (number !== undefined) {
            result *= number;
        }
        return multiply;
    }
    multiply.toString = function () {
        return result;
    }
    return {
        getResult: getResult,
        reset: reset,
        add: add,
        subtract: subtract,
        divide: divide,
        multiply: multiply
    }
}());
module.exports = Calculator;