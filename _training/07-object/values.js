const obj = {
    a: 1,
    b: 2,
    c: 3
}
const obj2 = {
    d: 4,
    e: 5,
    f: 6,
}

Object.setPrototypeOf(obj, obj2)

for (let key in obj) { // пройдет по всем перечисляемым свойствам, в том числе и у проторипов
    console.log(key)
}

console.log(Object.keys(obj))