// написать функцию, корорая определяет является ли переданная строка палиндромом
// могут быть как заглавные так и строчные буквы
// игнорируем все символы кроме буквы

const str = "Madam I'm Adam";
const str2 = "Do geese see God?";
const str3 = "А роза упала на лапу Азора";

function isLetter(char) {
  return char.toUpperCase() !== char.toLowerCase();
}
function isEquals(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

function isPolindrom(str) {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    const first = str[start];
    const last = str[end];
    if (!isLetter(first)) {
      start += 1;
      continue;
    }
    if (!isLetter(last)) {
      end -= 1;
      continue;
    }
    if (!isEquals(first, last)) return false;
    start += 1;
    end -= 1;
  }
  return true;
}

console.log(isPolindrom(str));
console.log(isPolindrom(str2));
console.log(isPolindrom(str3));
