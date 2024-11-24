/*
Согласно григорианскому календарю,
I век н. э. начался 1 января 1 года и закончился 31 декабря 100 года.
II век начался в 101 году, III век — в 201 и т. д.

нужно написать функцию, которая возвращает век, которому соответствует заданный год
*/

function centuryFromYear(year) {
    return Math.ceil(year / 100);
}
console.log(centuryFromYear(100))
console.log(centuryFromYear(1705) === 18);
console.log(centuryFromYear(1900) === 19);
console.log(centuryFromYear(1601) === 17);
console.log(centuryFromYear(2000) === 20);