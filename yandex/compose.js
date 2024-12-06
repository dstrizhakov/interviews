// Напиши функцию compose, которая принимает массив функций и аргументы

const add = (a, b) => a + b;
const square = (a) => a * a;

const compose = (...fns) => fns.reduce((f, g) => (...args) => {
    const result = g(...args);
    return Array.isArray(result) ? f(...result) : f(result);
});

console.log(compose(square,square,square,square, add)(1,2));


// А как применять функции в обратоном порядке?
const pipe = (...fns) => fns.reduceRight((acc, fn) => (...args) => acc(fn(...args)));
console.log(pipe(add, square,square,square,square)(1,1));

// Перепиши функции так чтобы они могли работать с асинхронными функциями.
const asyncCompose = (...fns) =>
    fns.reduce((f, g) =>
        async (...args) => f(await g(...args)));

const asyncPipe = (...fns) =>
    fns.reduceRight((f, g) =>
        async (...args) => f(await g(...args)));

const count = arr => arr.length
const split = str => str.split(/\s+/)
const addAsyncWord = async str => `${str} some words obtained asynchronously`
const read = text => text

const word = asyncCompose(
    count,
    split,
    addAsyncWord,
    read
)

const testAsyncCompose = async () => {
    const word1 = await word('Hello world')
    console.log('word ->', word1)
}

testAsyncCompose()

const pipedWord = asyncPipe(
    read,
    addAsyncWord,
    split,
    count,
)

const testAsyncPipe = async () => {
    const word1 = await pipedWord('Hello world')
    console.log('word ->', word1)
}

testAsyncPipe()