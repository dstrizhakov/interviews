// Task 1
// '01.10.2021' => '10/01/2021'
function butifyDate(date) {
    const [day, month, year] = date.split(".")
    return `${month}/${day}/${year}`
}
// это 10 января
// const date = new Date('01.10.2021')
// return `${date.getDay()}.${date.getMonth()+1}.${date.getFullYear()}

// УДАЛИТЬ ДУБЛИ ИЗ МАССИВА
let a = [1,1,3,4,5,6,7,7,8]
const uniq = [...new Set(a)]

// сделать как далее, только пушить в массив, если ключа нет
function uniqArr(arr) {
    const hash = {}
    arr.forEach((el) => {
        hash[el] = (hash[el] || 0 ) + 1;
    })
    return Object.keys(hash).map(key => Number(key))
}

// Task 3
console.log('===TASK 3===')




// Task 4
console.log('===TASK 4===')






// Написать функцию parallel, принимимающую массив функций,
//     и вторым аргументом функцию, которая выполняется, когда все результаты получены
async function parallel(arr, fn, threads = 2) {
    const result = [];
    while (arr.length) {
        const res = await Promise.all(arr.splice(0, threads).map(x => fn(x)));
        result.push(res);
    }
    return result.flat();
}

function promisify (func) {
    return new Promise((resolve, reject) => {
        func(strResult => {
            resolve(strResult)
        })
    })
}

function parallel (funcArray, doneAll) {
    return new Promise((resolve, reject) => {
        let total = funcArray.length
        const result = []

        funcArray
            .map(func => promisify(func))
            .forEach((promise, index) => {
                promise.then(data => {
                    result[index] = data
                    total--
                    if (!total) resolve(result)
                })
            })
    }).then(doneAll)
}

import React, { useState } from 'react';

const Button = ({ onClick }) => {
    console.log("button render");
    return (
        <button onClick={onClick}>
            "Click me"
        </button>
    );
}

export default function App() {
    const [count, setCount] = useState(0);
    const updateState = () => {
        setCount(value => value + 1);
    }

    return (
        <div>
            <button onClick={updateState}>increase count</button>

            <Button onClick={() => {console.log("button click")}} />
        </div>
    );
}