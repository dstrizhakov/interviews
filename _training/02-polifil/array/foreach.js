// создаем функцию forEach, указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// thisArg - контекст this, это необязательный параметр.
function forEach(arr, callback, thisArg) {
    // перебираем массив при помощи цикла for
    for (let index = 0; index < arr.length; index++) {
        // вызываем callback-функцию при помощи метода .call()
        // это нужно для того, чтобы передать в неё контекст thisArg
        // итак, передаем в неё следующие параметры:
        // thisArg - переданный извне контекст this
        // arr[index] - текущий элемент массива
        // index - индекс элемента массива
        // arr - исходный массив
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