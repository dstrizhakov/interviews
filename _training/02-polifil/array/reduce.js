// создаем функцию map указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// initialValue -  переменная, используемая в качестве изначального значения аккумулятора при первом вызове функции
function reduce(arr, callback, initialValue) {
    // объявляем переменную, которую будем передавать на следующий этап
    let result;
    // если первый аргумент не был передан, то используем в его качестве первый элемент входящего массива
    if(initialValue === undefined) {
        result = arr[0];
        //  не забываем удалить его из массива
        arr.shift();
    }  else {
        // если первоначальное значение было передано, то делаем его значением результата
        result = initialValue;
    }
    // перебираем массив при помощи цикла for
    for (let index = 0; index < arr.length; index++) {
        // вызываем callback функцию
        // передаем в неё параметры
        // null - нам не нужно передавать контекст this, поэтому вместо него передаем пустое значение
        // result - результат, который мы передаем в callback для совершения каких-то манипуляций над ним
        // arr[index] - текущий элемент массива
        // arr - исходный массив
        // после выполнения функции обратного вызова, присваиваем результать в перменную result
        result = callback.call(null, result, arr[index], arr);
    }
    // возвращаем результат после полного прохода цикла
    return result;
}


const mergeWordsAndNumebers = reduce(['One', 'Two', 'Three', 1, 2, 3], (phrase, word) => {
    return phrase + ' ' + word.toString();
}, '');

console.log(mergeWordsAndNumebers);
// Вывод:
// One Two Three 1 2 3

const mergeArrays = reduce([[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]], (res, current) => {
    let sum = 0;
    for (let index = 0; index < current.length; index++) {
        sum += current[index];

    }
    return sum
}, 0);

console.log(mergeArrays);
// Вывод:
// 30
const mergeArraysWithoutInitialValue = reduce([[1, 2, 3], [4, 5], [6], [7, 8], [9, 10, 11]], (res, current) => {
    return res.concat(current);
});

console.log(mergeArraysWithoutInitialValue);
// Вывод:
// [
//     1, 2, 3, 4,  5,
//     6, 7, 8, 9, 10,
//    11
//  ]
