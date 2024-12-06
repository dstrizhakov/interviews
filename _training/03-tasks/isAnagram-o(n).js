const wordToFind = "listen";
const words = ["enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent"];


function isAnagram(a,b) {
    if (a.length !== b.length) return false;
    const dict = {};
    for (const char of a) {
        dict[char] = (dict[char] || 0) + 1;
    }
    for (const char of b) {
        if (!dict[char]) return false;
        dict[char]--;
    }
    return true;
}

function stringGen(len) {
    let text = '';

    const charset = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < len; i++) {
        text += charset.charAt(
            Math.floor(Math.random() * charset.length),
        );
    }

    return text;
}
const createList = (count) => {
    const array = [];

    for (let index = 0; index < count; index++) {
        array.push(stringGen(6),);
    }

    return array;
};
const list = createList(10000000);
const filterAnagrams = (word, words) => {
    const start = performance.now()
    const result = words.filter(item => isAnagram(word, item))
    console.log(performance.now() - start)
    return result;
}
console.log(filterAnagrams(wordToFind, list))