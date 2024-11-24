// Дан список слов. Каждое слово представлено массивом возможных вариантов нормализации.
// Написать функцию, которая принимает список слов и возвращает функцию,
// которая при каждом вызове возвращает строку - одно из возможных сочетаний вариантов
// слова в предложении. Пока не вернёт все возможные варианты.
// Нужна реализация без итераторов.
// Ни список слов, ни варианты нормализации не будут пустыми.

// Внучку –> ['внучка', 'внучок', ...]
// Машу –> ['маша', 'махать', 'машу', ...]
// ...
const list = [
    ['внучка', 'внучок', 'внучки'],
    ['маша', 'махать', 'машу'],
    ['собирает', 'собирать', 'берет', 'забирать']
];
function allSentences(list) {
    let combinations = leftCombinations = list.reduce((accumulator, current) =>
        accumulator * current.length, 1);
    return function nextSentence() {
        if (leftCombinations === 0) {
            return undefined;
        }
        let sentence = '';
        let helper = 1;
        for (let i = 0; i < list.length; i++) {
            helper *= list[i].length;
            sentence += `${list[i][Math.floor(helper - leftCombinations /
                combinations * helper) % list[i].length]} `;
        }
        leftCombinations--;
        console.log(leftCombinations)
        return sentence.trim();
    }
}
const nextSentence = allSentences(list);

for (let i = 0; i < 1 + list.reduce((accumulator, current) =>
    accumulator * current.length, 1); i++) {
    console.log(nextSentence());
}
