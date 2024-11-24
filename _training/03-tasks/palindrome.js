function palindrome1(str) {
    return str.split('').reverse().join('') === str;
}

const palindromeFast = (str) => {
    let start = 0
    let stop = str.length - 1;
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        console.log(start, stop)
        if (str[start] !== str[stop]) return false;
        start++;
        stop--;
    }
    return true;
}

// console.log(palindrome('dovod')) // true
// console.log(palindrome('tower')) // false


console.log(palindromeFast('dovod')) // true
console.log(palindromeFast('tower')) // false