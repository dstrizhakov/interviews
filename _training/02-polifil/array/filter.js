// cоздаем функцию map, указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// thisArg - контекст this, это необязательный параметр
function filter(arr, callback, thisArg) {
    // создаем контейнер, в который будет помещать отфильтрованные данные из массива
    const container = [];

    // перебираем массив при помощи цикла for
    for (let index = 0; index < arr.length; index++) {
        // вызываем callback-функцию при помощи метода .call()
        // это нужно, чтобы передать в неё контекст thisArg
        // передаем в неё параметры
        // thisArg - переданный извне контекст this
        // arr[index] - текущий элемент массива
        // index - индекс элемента массива
        // arr - исходный массив
        // если функция возвращает true, то добавляем текущий элемент в контейнер
        if(callback.call(thisArg, arr[index], index, arr)) {
            container.push(arr[index]);
        }
    }
    // возвращаем контейнер с отфильтрованными данными
    return container;
}

const someArr = [1,2,3, undefined, null, 4, 'some string', 5];

result = filter(someArr, (el) => {
    return typeof el === 'number';
});

console.log(result);