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

const list = createList(10000000); // в среднем 1900

//2100 - 2500
// function isAnagram (a,b)  {
//     if (a.length !== b.length) return false;
//     const map = new Map();
//     for (let char of a) {
//         map.has(char)
//             ? map.set(char, map.get(char) + 1)
//             : map.set(char, 1)
//     }
//     for (let char of b) {
//         if (map.has(char)) {
//             map.set(char, map.get(char) - 1)
//         } else return false
//     }
//     for (let value of map.values()) {
//         if ( value !== 0) return false;
//     }
//     return true;
// }

//1850-2100
// function isAnagram(a, b) {
//     if (a.length !== b.length) return false;
//     const map = new Map();
//
//     for (let char of a) {
//         map.set(char, (map.get(char) || 0) + 1);
//     }
//
//     for (let char of b) {
//         if (!map.has(char)) return false;
//         map.set(char, map.get(char) - 1);
//     }
//
//     return true;
// }
// 1400
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




const filterAnagrams = (word, words) => {
    const start = performance.now()
    const result = words.filter(item => isAnagram(word, item))
    console.log(performance.now() - start)
    return result;
}
console.log(filterAnagrams(wordToFind, list))