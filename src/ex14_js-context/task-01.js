const Calculator = {
    result: 0,
    add: function add (num){
        if(num !== undefined){
            this.result += num
        };
        return this;
    },
    setState: function setState (num){
        if(num !== undefined){
            this.result = num;
        }
        return this;
    },
    multiply: function multiply (num){
        if(num !== undefined){
            this.result *= num;
        }
        return this;
    },
    divide: function divide(num){
        if (num !== undefined){
            this.result /= num;
        }
        return this;
    },
    subtract: function subtract(num){
        if (num !== undefined){
            this.result -= num;
        }
        return this;
    },
    reset: function reset(){
        this.result = 0;
        return this;
    },
    getResult: function getResult (){
        return this.result;
    },
    fetchData: function fetchData(callback){
        setTimeout(() => {callback(500)}, 1000);
        return this;
    }
}
module.exports = Calculator;