// создаем функцию every указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// thisArg - контекст this, это необязательный параметр
function every(arr, callback, self) {

    // перебираем массив при помощи цикла for
    for (let index = 0; index < arr.length; index++) {
        // вызываем callback функцию при помощи метода .call()
        // это нужно, чтобы передать в неё контекст thisArg
        // передаем в неё параметры
        // thisArg - переданный извне контекст this
        // arr[index] - текущий элемент массива
        // index - индекс элемента массива
        // arr - исходный массив
        // если хотя бы один из вызовов функции обратного вызова вернул false, то и мы возвращаем false
        if(!callback.call(self, arr[index], index, arr)) {
            return false;
        }
    }

    // по умолчанию мы всегда возвращаем true
    return true;
}

const everyCheck = every([1,2,3,4], (el)=> {
    return typeof el ==='number';
}, this);

console.log(everyCheck);
