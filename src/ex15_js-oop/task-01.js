class Sweets {
    constructor(name) {
        this.name = name;
    }
}

class Cookie extends Sweets {
    constructor(name, weight, note) {
        super(name);
        this.weight = weight;
        this.note = note;
    }
}

class Candys extends Sweets {
    constructor(name, weight, isFilling) {
        super(name);
        this.weight = weight;
        this.isFilling = isFilling;
    }
}

const firstBox = new Cookie("Orio", 0.500, 'please merge this task');
const secondBox = new Cookie("Barney", 0.600, 'You will meet your love');
const thirdBox = new Candys("Tofee", 0.500, true);

class Gift {
    constructor(array) {
        this.gift = array;
    }
    getWeight() {
        return this.gift.reduce((accumulator, currentValue) => {
            return accumulator + currentValue.weight;
        }, 0);
    }
    getSort() {
        return this.gift.sort((a, b) => {
            return a.weight - b.weight;
        });
    }
    findSweets(value) {
        return this.gift.filter(element => {
            return element.name.includes(value);
        });
    }
}

const gift = new Gift([firstBox, secondBox, thirdBox]);
console.log(gift);
console.log(gift.getWeight());
console.log(gift.findSweets("Barney"));
console.log(gift.getSort());