const palindromGroupBy = (arr, callback) => {
    return arr.reduce((acc, item) => {
        const key = callback(item);
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
    }, {})
}

const palindrom = (arr, callback) => {
    return arr.reduce((acc, item) => {
        const key = callback(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {})
}

const pamindrom2 = (arr, key) => {
    return arr.reduce((acc, item) => ({
        ...acc,
        [item[key]]: [
            ...(acc[item[key]] || []),
            item,
            ]
        }), {})
}


const toGroup = [
    {
        name: 'Jack',
        surname: 'Sparrow',

    },
    {name: 'Jack', surname: 'Smith' },
    {name: 'John'},
]

console.log(palindromGroupBy(toGroup, item => item.name));
console.log(palindrom(toGroup, item => item.name));
console.log(pamindrom2(toGroup, 'surname'));