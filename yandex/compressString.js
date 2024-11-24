// Задача 6. Дана строка:
// AAACCXXXXAAAAAABBBBB
// Необходимо переделать строку и привести к виду символ+количество повторения.
// Например высшеуказанную строку необходимо переделать
// A3C2X4A6B5

const string = 'AAACCXXXXAAAAAABBBB';

function compressString(str) {
    let result = '';
    let count = 1; // Начинаем с 1, так как первый символ уже встречается

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            // Если символ совпадает с предыдущим, увеличиваем счетчик
            count++;
        } else {
            // Если символ отличается, добавляем текущий символ и количество в результат
            result += str[i - 1] + count;
            count = 1; // Сбрасываем счетчик для нового символа
        }
    }

    // Добавляем последний символ и его количество
    result += str[str.length - 1] + count;

    return result;
}
console.log(compressString(string));
console.log(compressString('A3C2X4A6B5'));
