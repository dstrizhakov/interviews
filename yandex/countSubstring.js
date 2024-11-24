/*
Написать функцию, которая принимает на вход 2 строковых аргумента,
подсчитывает количество вхождений строки из второго аргумента в
строке из первого аргумента.

Замечания:
  - первый аргумент может быть пустой строкой
  - второй аргумент может быть только строкой из одного символа
  - нельзя использовать регулярные выражения
*/

function strCount(str, char) {
    let res = 0;
    for (let el of str) {
        if (el === char) {
            res += 1
        }
    }
    return res;
}

function countOccurrences(str, substring) {
    if (!str || !substring || substring.length === 0) return 0;
    let count = 0;
    let index = 0;
    while ((index = str.indexOf(substring, index)) !== -1) {
        count++;
        index += substring.length; // Продвигаемся дальше, чтобы не искать с того же места
    }
    return count;
}

console.log(strCount('Hello', 'o')) // => 1
console.log(strCount('Hello', 'l')) // => 2
console.log(strCount('', 'z'))      // => 0
console.log(countOccurrences('Hello', 'll'))      // => 0
