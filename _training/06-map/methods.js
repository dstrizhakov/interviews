// const map = new Map();
//
// map.set('key', 'value');
//
// console.log(map);
//
// const arr = [1,2,3]
// console.log(arr)
// arr.sort((a,b) => b-a)
// console.log(arr)
// const newArr = arr.toSorted((a,b) => a-b);
// console.log(newArr)
//
// console.log(Object.is(arr, arr.sort((a,b) => a-b)))
//
// console.log(typeof NaN)
//
// const groupBy = (array, callback) => {
//     return [...array].reduce((acc, item) => {
//         const key = callback(item);
//         acc[key] ??= [];
//         acc[key].push(item);
//         return acc
//     }, Object.create(null))
// }

function nFetch (url, options = {}, retry = 5)  {
    return fetch(url, options)
        .then(res => {
        if(res.ok) {
            return res.json()
        } else {
            throw new Error(`No response from server`)
        }

    }).catch(err => {
        if (retry > 0) {
            return nFetch(url, options, retry - 1)
        }

        throw err;
    })
}

// (async function fetchUsers() {
//     try {
//         const users = await nFetch('https://jsonplaceholder.typicode.com/userss', {}, 20);
//         console.log(users)
//     } catch (err) {
//         console.error(err)
//     }
// })()

function isPan (string) {
    const abcSet = new Set('abcdefghijklmnopqrstuvwxyz');
    for (let char of string) {
        abcSet.delete(char);
        if (!abcSet.size) return true
    }
    return [...abcSet]
}

    const panagram = 'I, quartz pyx, who fling muck beds jv'

    // console.log(isPan(panagram));

function isAnagram (a, b) {
    if(a.length !== b.length) return false;

    const dict =  {};

    for (let char of a) {
        dict[char] = (dict[char] || 0) + 1
    }
    for (let char of b) {
        if(!dict[char])  return false; // если ключа нет или значение 0
        dict[char]--;
    }
    return true;
 }

 console.log(isAnagram('qwerty', 'ytrewq'))

// nFetch('https://jsonplaceholder.typicode.com/users/2')
//     .then(res => {
//         console.log(res)
//     }).catch(err => {console.log(err)})

