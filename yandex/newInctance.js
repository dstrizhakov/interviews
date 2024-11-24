// Задача 4.
// Дано
// var b = new A(1,2,3);
// Необходимо реализовать функцию newInctance
// которое будет делать то же самое, что и new A(1,2,3);
// //b1 = A.newInctance([1,2,3]);
// //b1 instanceOf A

// A.newInctance([1,2,3]);

// A.newInctance = function() {

// }

class A {
    constructor(...args) {
        this.a = args[0];
        this.b = args[1];
        this.c = args[2];
    }
    static newInstance(...args) {
        return new A(...args);
    }
}

// A.newInstance = function(...args) {
    // let obj = new A();
    // let keys = Object.keys(obj);
    // for (let i = 0; i < keys.length; i++) {
    //     obj[keys[i]] = args[i];
    // }
    // return obj
// }

let b = new A(1,2,3);
console.log(b, b instanceof A);

let b1 = A.newInstance(4,5,6);
console.log(b1, b1 instanceof A);