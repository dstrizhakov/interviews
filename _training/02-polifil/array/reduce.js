// создаем функцию map указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// initialValue -  переменная, используемая в качестве изначального значения аккумулятора при первом вызове функции
function reduce(arr, callback, initialValue) {
    let result;
    if(initialValue === undefined) {
        result = arr[0];
        arr.shift();
    }  else {
        result = initialValue;
    }
    for (let index = 0; index < arr.length; index++) {
        result = callback.call(null, result, arr[index], arr);
    }
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
