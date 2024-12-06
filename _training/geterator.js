function* getLangs() {
    yield 'java';
    yield 'js';
    yield 'rust';
    yield 'c++';
}


const generator = getLangs()


console.log(generator.next());
// { value: 'java', done: false }
console.log(generator.next());
// { value: 'js', done: false }
console.log(generator.next());
// { value: 'rust', done: false }
console.log(generator.next());
// { value: c++, done: false }
console.log(generator.next());
// { value: undefined, done: true }

const set = new Set([1,2,3,4,5,6,7,8,9,10]);

function* setFilter(set, fn) {
    for (let item of set) {
        if (fn(item)) {
            yield item;
        }
    }
}

// Пример использования:
const filteredSet = setFilter(set, num => num % 2 === 0); // Фильтруем чётные числа

// Для получения результата, итерируем по генератору
for (let item of filteredSet) {
    console.log(item);
}

console.log(filteredSet);
