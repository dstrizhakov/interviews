function removeDuplicateWords(s) {
    // const set = new Set();
    // s.split(' ').forEach((str) => set.add(str));
    // return [...set].join(' ');
    const set = new Set(s.split(' '))
    return [...set].join(' ');

}

const result = removeDuplicateWords('John Wick Wick John is is innocent is John Wick innocent is')
console.log(result);