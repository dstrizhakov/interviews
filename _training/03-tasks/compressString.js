function compressString(str) {
    let result = "", count = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }
    result += str[str.length - 1] + count
   return result;
}

const str = "aabcccccaaa";

console.log(compressString(str))