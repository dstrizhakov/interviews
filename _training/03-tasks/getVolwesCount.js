function getVolwesCount(str) {
    const test = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').filter((char) => test.includes(char)).length;
}

console.log(getVolwesCount('John Wick Wick John is is innocent is John Wick innocent is')); //16