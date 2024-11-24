/**
* Необходимо написать функцию strjoin, которая склеивает строки через разделитель.
 * console.log(strjoin('.', 'a', 'b', 'c')); // 'a.b.c'
 * console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f')) // 'a-b-c-d-e-f'
*/


function strjoin() {
    const [joinChar, ...strings] = arguments;
    let result = '';
    for (let i = 0; i < strings.length; i++) {
        result += strings[i];
        if (i < strings.length - 1) {
            result += joinChar;
        }
    }
    return result;
}
console.log(strjoin('.', 'a', 'b', 'c'))
console.log(strjoin('-', 'a', 'b', 'c', 'd', 'e', 'f'))


// Нужно написать функцию strjoin, которая
// склеивает строки через разделитель.
// Первый аргумент - сам разделитель
// остальные - элементы, которые надо склеить

function strjoin1(separator, ...chars) {
    let joined = '';
    for (let i = 0; i < chars.length; i++) {
        joined += chars[i] + (i + 1 !== chars.length ? separator : '');
    }
    return joined;
}

console.log(strjoin1('.', 'a', 'b', 'c')) //'a.b.c'
console.log(strjoin1('-', 'a', 'b', 'c', 'd', 'e', 'f')) //'a-b-c-d-e-f'


// function strjoin1(joinChar, ...strings) {
//     return strings.join(joinChar);
// }



// console.log(strjoin1('.', 'a', 'b', 'c'))
// console.log(strjoin1('-', 'a', 'b', 'c', 'd', 'e', 'f'))

