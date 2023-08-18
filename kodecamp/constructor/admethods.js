// Array.prototype.sum = function () {
//     return this.reduce((prev, next) => prev + next);
// }

// const nums = [1, 2, 3, 4, 5];
// console.log(nums.sum());

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.substring(1)
}
const name = "blessing";
console.log(name.capitalize());


// INHERITANCE

