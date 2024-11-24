// Задача 2. Необходимо в заданном массиве найти все слова
// которые являются анаграммами и вернут их в виде массива.
// Например ["рот","торс","сорт","человек","тор","рост"]
// необходимо возвращать
// [["рот", "тор"],["торс", "сорт", "рост"]].
// Одиночные слова не возвращаем.
const words = ["рот","торс","сорт",'орт',"человек","тор", 'срок', "рост",'отр','тро', 'векочел', 'крос', 'волечек'];

const findAnagramsLists = ((words) => {
    const wordGroups = {};
    words.forEach(word => {
        wordGroups[word.split('').sort().join('')]
            ? wordGroups[word.split('').sort().join('')].push(word)
            : wordGroups[word.split('').sort().join('')] = [word];
    });
    return Object.values(wordGroups);
});

//Алгоритм имеет сложность O(n⋅klogk)
// Алгоритм использует O(n⋅k) памяти
function findAnagrams(words) {
    const map = new Map();

    // Проходим по каждому слову в массиве
    for (let word of words) {
        // Сортируем буквы в слове и превращаем их в строку
        const sortedWord = word.split('').sort().join('');

        // Если такого ключа нет в Map, добавляем новый массив
        if (!map.has(sortedWord)) {
            map.set(sortedWord, []);
        }

        // Добавляем слово в соответствующий список анаграмм
        map.get(sortedWord).push(word);
    }

    // Получаем только те группы слов, которые содержат больше одного элемента
    return Array.from(map.values()).filter(group => group.length > 1);
}

console.log(findAnagrams(words));

// O(n*k)
function findAnagramsFast(words) {
    const anagramsMap = new Map();
    for (let word of words) {
        let key = 0;
        for (let char of word) {
            key += char.toLowerCase().charCodeAt(0) - 97;
        }
        if (!anagramsMap.has(key)) {
            anagramsMap.set(key, []);
        }
        anagramsMap.get(key).push(word);
    }
    return [...anagramsMap.values()].filter(group => group.length > 1);
}

console.log(findAnagramsFast(words));
