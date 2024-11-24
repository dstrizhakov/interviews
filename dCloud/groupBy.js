let data = [
    {id: 1, name: 'Japan', size: '8231'},
    {id: 2, name: 'Indonesia', size: '3541'},
    {id: 3, name: 'Brasilian', size: '3237'},
    {id: 4, name: 'USA', size: '12093'},
    {id: 5, name: 'Russia', size: '9053'}
];

//Вывести названия стран, Сортированые по size, в названии которого есть буква s

function groupBy(arr) {
    const unsorted = arr.reduce((acc, item) => {
        if ([...item.name.toLowerCase()].includes('s')) {
            acc.push(item)
        }
    }, [])
    return unsorted.sort((a,b) => a.size - b.size)
}

console.log(groupBy(data))