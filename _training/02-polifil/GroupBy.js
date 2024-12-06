const GroupBy = (arr, callback) => {
    return arr.reduce((acc, item) => {
        const key = callback(item);
        acc[key] = acc[key] || [];
        acc[key].push(item);
        return acc;
    }, {})
}


const toGroup = [
    {
        name: 'Jack',
        surname: 'Sparrow',

    },
    {name: 'Jack', surname: 'Smith' },
    {name: 'John'},
]

console.log(GroupBy(toGroup, item => item.name));
