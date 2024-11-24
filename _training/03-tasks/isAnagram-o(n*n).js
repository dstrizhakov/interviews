const wordToFind = "listen";
const words = ["enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent", "enlist", "google", "inlets", "banana", "silent"];


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

const list = createList(10000000); // в среднем 3200

function isAnagrams(word, words) {
    const start = performance.now()
    const sample = word.split('').sort().join('');
    const result = words.filter(function (e) {
        return e.split('').sort().join('') === sample;
    })
    console.log(performance.now() - start)
    return result
}

console.log(isAnagrams(wordToFind, list))