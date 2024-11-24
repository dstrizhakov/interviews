// Задача 3. Необходимо написать функцию карринга (currying). Например если у нас есть функция sum
// function sum(a,b,c) {
//      return a + b +c;
// }
// То после использования функции карринга можно будет использовать следующую запись:
// carry = carring(sum);
// carry(1,2,3)       // 6
// carry(1,2)(3)      // 6
// carry(1)(2)(3)     //6

const curry = (func) => {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            }
        }
    };
}

function sum(a,b,c) {
    return a + b + c;
}

let curriedSum = curry(sum);

console.log(curriedSum(11, 5, 6)); // 22
console.log(curriedSum(3, 34)(6)); // 43
console.log(curriedSum(3)(5)(9)); // 17