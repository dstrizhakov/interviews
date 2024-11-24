// Дана строка s. Необходимо сказать, можно ли
// переставить буквы в строке так, чтобы получился палиндром.


function replaceForPalindrome(s) {
    // Очищаем строку от символов, которые не являются буквами
    s = s.replace(/[^a-zа-я]/gi, '').toLowerCase();

    // Создаем объект для подсчета вхождений символов
    let charCount = {};

    // Подсчитываем количество каждого символа
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Проверяем, сколько символов имеют нечетное количество вхождений
    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount++;
        }
    }

    // В палиндроме может быть не более одного символа с нечетным количеством вхождений
    return oddCount <= 1;
}
console.log(replaceForPalindrome('arozaupalan       alapuazora')) // true
console.log(replaceForPalindrome('арозаупаланалапуазора')) // true
console.log(replaceForPalindrome('аро,,,,,ланалапуазора')) // false