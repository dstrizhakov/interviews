
function groupBy(arr, callback) {
    return arr.reduce((acc, item) => {
        const key = callback(item);
        acc[key] ??= [];
        acc[key].push(item)
        return acc;
    }, {})
}

function groupByPolifil(callback) {
    return this.reduce((acc, item) => {
        const key = callback(item);
        acc[key] ??= [];
        acc[key].push(item)
        return acc;
    }, {})
}

if (!Array.prototype.groupBy) {
    Array.prototype.groupBy = groupByPolifil
}


const toGroup = ["one", "two", "three"]
const floats = [6.1, 4.2, 6.3]
const objArrayToGroup = [
    {name: 'Dima', surname: 'Strizhakov', age: 38},
    {name: 'Dima', surname: 'Ivanov', age: 22},
    {name: 'Dima', surname: 'Petrov', age: 55},
    {name: 'Dima', surname: 'Sidorov', age: 95},
    {name: 'Valera', surname: 'Strizhakov', age: 15},
    {name: 'Valera', surname: 'Sidorov', age: 47},
]
// console.log(groupBy(toGroup, (item) => item.length));
// console.log(groupBy(floats, Math.round));
// console.log(groupBy(objArrayToGroup, (item) => item.surname));

console.log(toGroup.groupBy((item) => item.length));
console.log(floats.groupBy(Math.round));
console.log(objArrayToGroup.groupBy((item) => item.surname));