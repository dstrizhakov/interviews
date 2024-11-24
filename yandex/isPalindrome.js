
// Примеры палиндромов:
// Казак
// А роза упала на лапу Азора
// Do geese see God?
// Madam, I’m Adam
function isPalindrome(string) {
    const isAlphaNumeric = (char) => /[a-zA-Zа-яА-Я0-9]/.test(char);
    let left = 0;
    let right = string.length - 1;
    while (left < right) {
        while (left < right && !isAlphaNumeric(string[left])) left++;
        while (left < right && !isAlphaNumeric(string[right])) right--;
        if (string[left].toLowerCase() !== string[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome('Казак'));
console.log(isPalindrome('А роза упала на лапу Азора'));
console.log(isPalindrome('Do geese see God'));
console.log(isPalindrome('Madam, I’m Adam'));
console.log(isPalindrome('kachok'));
console.log(isPalindrome('er       213456521        []]]                e'));
console.log(isPalindrome('adamImAda'));
console.log(isPalindrome(''));
