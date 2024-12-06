// создаем функцию map, указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// thisArg - контекст this, это необязательный параметр

function map(arr, callback, thisArg) {
    const container = [];
    for (let index = 0; index < arr.length; index++) {
        container.push(callback.call(thisArg,arr[index], index, arr))
    }
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
