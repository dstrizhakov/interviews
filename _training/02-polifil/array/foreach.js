// создаем функцию forEach, указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// thisArg - контекст this, это необязательный параметр.
function forEach(arr, callback, thisArg) {
    for (let index = 0; index < arr.length; index++) {
        callback.call(thisArg, arr[index], index, arr);
    }
}


// Пример вызова с параметрами
forEach([1,2,3, 'Foo'], (el, index, arr) => {
    console.log('----------')
    console.log('Element: ', el);
    console.log('Index:', index);
    if(index === 3) {
        console.log('Array:', arr)
    }
}, this);