function Appliance(name, isTurn, consumption) {
    this.name = name;
    this.isTurn = isTurn;
    this.consumption = consumption;
}

function KitchenAppliance() {
    Appliance.apply(this, arguments);
}

KitchenAppliance.prototype.counterEnergy = function (array) {
    return array.reduce((acc, correntItem) => acc + correntItem.consumption, 0);
};

function HallAppliance() {
    Appliance.apply(this, arguments);
}

function Room(array) {
    this.appliances = array;
}

Room.prototype = Object.create(KitchenAppliance.prototype);
Room.prototype.constructor = Room;

Room.prototype.findAppliance = function (value) {
    return this.appliances.filter(element => {
        return element.name.includes(value);
    });
};

const toaster = new KitchenAppliance("toaster", false, 100);
const tv = new HallAppliance("tv", true, 1000);
const room = new Room([toaster, tv]);
console.log(room.counterEnergy([toaster, tv]));
console.log(room.findAppliance("tv"));