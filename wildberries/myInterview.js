const str = '123';

String.prototype.repeatify = function (count) {
    let result = ''
    for (let i = 0; i < count; i++) {
        result += this;
    }
    return result;
}

console.log(str.repeatify(3)) // 123123123


let a = [1,1,3,4,5,6,7,7,8]

function deleteDuplicate(arr) {
    return [...new Set(arr)]
}

function deleteDuplicateAlt(arr) {
    const dict = {};
    for (let num of arr) {
        dict[num] = (dict[num] ?? 0) +  1;
    }

    return Object.keys(dict).map(key => Number(key))
}




function findIntersection (arr1, arr2) {
    const set2 = new Set(arr2);

    const result = [];

    for (let num of arr1) {
        if (set2.has(num)) {
            result.push(num);
            set2.delete(num)
        }
    }
    return result
}

console.log(findIntersection([1, 4, 5, 10, 8], [1, 8, 7, 9, 5]));

//

// 1,7,123, 8,9,3,5,2,6,4
console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);
Promise.resolve().then(console.log('123'))

async function wait() {
    console.log(8)
    let prom = await new Promise(resolve => {
        console.log(9);
        setTimeout(resolve, 1000);
    });
}

wait();

//

import React, { useState } from 'react';

const Button = React.memo(({ onClick }) => {
    console.log("button render");
    return (
        <button onClick={onClick}>
            "Click me"
        </button>
    );
})



export default function App() {
    const [count, setCount] = useState(0);
    const updateState = () => {
        setCount(value => value + 1);
    }

    const handleClick = useCallback(()=> {
        console.log("button click")
    },[])

    return (
        <div>
            <button onClick={updateState}>increase count</button>

            <Button onClick={handleClick} />
        </div>
    );
}

// ***

const [count, setCount] = useState(0);
const updateState = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    console.log(count);
}


body {
    margin: 10px;
    padding: 0;
    background: #fddb6d;
}

.img {
    width: 320px;
    margin-bottom: 20px;
}

.container {
    background: black;
    width: 300px;
    height: 100px;
}
.cubes {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
}

.cube {
    background: #fff;
    width: 20px;
    height: 20px;
}

.cube:nth-child(even) {
    background: green;
}

.cube:last-child {
    margin-left: auto;
}

.cube:last-child::after {
    content: '';
    background: green;
    width: 15px;
    height: 15px;
    transform: translate(-7px, 2px) rotate(45deg);
    display: block;
}