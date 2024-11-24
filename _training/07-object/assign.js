/*
Метод Object.assign() используется для копирования значений всех собственных перечисляемых свойств
из одного или более исходных объектов в целевой объект. После копирования он возвращает целевой объект.
*/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source);

console.log(target);
// Expected output: Object { a: 1, b: 4, c: 5 }

console.log(returnedTarget === target);
// Expected output: true