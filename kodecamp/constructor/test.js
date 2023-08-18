function Car(name, year) {
    this.name = name;
    this.year = year;
    // this.displayDetails = function() { // always a THIS keyword ahead of any internal expressions
    //     console.log(`${this.name} ${this.year}`);
    // }
}

// function Person(name) {
//     this.name = name
// }

// const car1 = new Car("Rolce Royce", 2020)
// const car2 = new Car("Rav4", 2022)
// console.log(car1.name, car1.year);
// console.log(car1 instanceof Car);
// console.log(car1 instanceof Person); // Not an instance of person
// car2.displayDetails();


// Car.prototype.displayDetails = function () {
//     console.log(this.name);
// }

// Car.prototype.displayFullDetails = function () {
//     console.log(this.name, this.year);
// }

//Alternative to d above is to write a function 

Car.prototype = {
    constructor: Car, //Adding d constructor keyword helps 
    //Assign object literal on all cars
    displayDetails: function() {
        console.log(this.name);
    },

    displayYear: function() {
        console.log(this.year);
    }
}

const car1 = new Car("Camry", 2023)
const car2 = new Car("Edge", 2022)

// console.log(car1.name);
car1.displayDetails();
car2.displayYear()
console.log(car1.constructor === Car);
console.log(car1 instanceof Car);
// car2.displayFullDetails();
