// Задача 1. Необходимо реализовать функцию которая будет выявлять
// являются ли две строки анаграммами.
// Две строки являются анаграммами
// если один получается от другого с помощю перестоновки букв.
// Например "рот" и "тор".

const s1 = 'рот',
    s2 = 'тор';

function isAnagram(a, b) {
    if (a.length !== b.length) return false;
    let map = new Map();
    for (let i = 0; i < a.length; i++) {
        if (map.has(a[i])) {
            map.set(a[i], map.get(a[i]) + 1);
        } else {
            map.set(a[i], 1);
        }
    }
    for (let i = 0; i < b.length; i++) {
        if (map.has(b[i])) {
            map.set(b[i],map.get(b[i]) - 1);
        }
    }
    let keys = map.keys();
    for (let key of keys) {
        if (map.get(key) !== 0) {
            return false;
        }
    }
    return true;
}

console.log(isAnagram(s1,s2));
console.log(isAnagram('трос','срок'));