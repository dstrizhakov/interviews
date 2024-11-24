function cleanAnagrams(arr) {
    let map = new Map();

    for (let word of arr) {
        let sorted = word.toLowerCase().split("").sort().join("");
        map.set(sorted, word);
    }
    return Array.from(map.values());
}

const word = 'cheaters'
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(cleanAnagrams(arr));


const wordToFind = "listen";
const words = ["enlist", "google", "inlets", "banana", "silent"];

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

console.log (words.filter(item => isAnagram(wordToFind, item)))