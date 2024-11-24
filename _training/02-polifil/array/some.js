// создаем функцию some, указав в качестве параметров
// arr - Массив
// callback - Функция обратного вызова
// thisArg - контекст this, это необязательный параметр
function some(arr, callback, self) {

    // перебераем массив при помощи цикла for
    for (let index = 0; index < arr.length; index++) {
        // вызываем callback функцию при помощи метода .call()
        // это нужно, чтобы передать в неё контекст thisArg
        // передаем в неё параметры
        // thisArg - переданный извне контекст this
        // arr[index] - текущий элемент массива
        // index - индекс элемента массива
        // arr - исходный массив
        // если хотя бы один из вызовов функции обратного вызова вернул true, то и мы возвращаем true
        if(callback.call(self, arr[index], index, arr)) {
            return true;
        }
    }
    // по умолчанию мы всегда возвращаем false
    return false;
}

const checkSome = some([1,2,'3',4, null], (el)=> {
    return typeof el === 'string';
}, this);

console.log(checkSome);