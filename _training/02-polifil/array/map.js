// Array.prototype.map2 = function(callback, thisArg) {
//     const arr = new Array(this.length);
//     for (let i = 0; i < this.length; i++) {
//         if (i in this) {
//             arr[i] = (callback.call(thisArg, this[i], i, this));
//         }
//     }
//     return arr;
// };
//
// const a = Array(5);
// a[2] = 2;
// const b = a.map2(x => x * 2);
// console.log(a);
// console.log(b);
// console.log(0 in b);

// создаем функцию map, указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// thisArg - контекст this, это необязательный параметр


function map(arr, callback, thisArg) {
    // создаем контейнер, в который будем помещать модифицированные данные из массива
    const container = [];

    // перебираем массив при помощи цикла for
    for (let index = 0; index < arr.length; index++) {
        // вызываем callback-функцию при помощи метода .call()
        // это нужно для того чтобы передать в неё контекст thisArg
        // передаем в неё параметры
        // thisArg - переданный извне контекст this
        // arr[index] - текущий элемент массива
        // index - индекс элемента массива
        // arr - исходный массив
        // не забываем добавлять результат выполнения фунции в контейнер

        container.push(callback.call(thisArg,arr[index], index, arr))
    }
    // возвращаем контейнер с модифицированными данными
    return container;
}

const users = [
    {
        name: 'Ivan',
        lastName: 'Ivanov'
    },
    {
        name: 'Semen',
        lastName: 'Semenov'
    },
    {
        name: 'Vladimir',
        lastName: 'Vladimirov'
    },
]

let usersWithId = map(users, (el, index) => {
    el.id = ++index;
    return el;
});

console.log(usersWithId);
