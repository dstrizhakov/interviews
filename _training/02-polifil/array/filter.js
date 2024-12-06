// cоздаем функцию map, указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// thisArg - контекст this, это необязательный параметр
function filter(arr, callback, thisArg) {
    const container = [];
    for (let index = 0; index < arr.length; index++) {
        if(callback.call(thisArg, arr[index], index, arr)) {
            container.push(arr[index]);
        }
    }
    return container;
}

const someArr = [1,2,3, undefined, null, 4, 'some string', 5];

result = filter(someArr, (el) => {
    return typeof el === 'number';
});

console.log(result);