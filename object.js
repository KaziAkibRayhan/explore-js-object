const player = {};
player.name = 'Jhon due';
player.age = 23;

player.isAlive = function () {
    return true;
};
/* 
console.log(player);
console.log(player.isAlive());
 */

const student = {
    name: 'Jhon',
    age: 23,
    isAlive: function () {
        return true;
    },
    roll: 45,
    reg: 23
}

// object contructor

const person = new Object();
// console.log(person);

// object create

const item = Object.create(null);
// console.log(item)
const std = Object.create(student);
// console.log(std.name)

// object create by class

class Student {
    name = 'Jhon';
    address = 'Dhaka';
    constructor(age) {
        this.age = age;
    }
}

const person1 = new Student(45);
// console.log(person1)

// object create by function

function Car(model, price) {
    this.model = model;
    this.price = price;
}
const tesla = new Car('Corolla', 23000000);
console.log(tesla)