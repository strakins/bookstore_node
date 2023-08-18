// const id = Symbol("id");

// const person = {
//     name: "Joshua",
//     age: 71,
//     [id]: 5623
// }

// for (let key in person) {
//     console.log(key);
// }

let sym = Symbol.for("name");
console.log(Symbol.keyFor(sym));