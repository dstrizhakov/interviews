// Задача 8. Реализовать fuzzysearch. На вход поступают две
// строки - строка поиска и строка которую проверяем.
// Необходимо сказать соответствует строка на входе проверяемой строке.
// При проверке соответствия в строке поиска могут быть пропущены буквы.

const fuzzysearch = (search, check) => {
    if (!search || !check) return false;  // если одна из строк пустая, возвращаем false
    let i = 0;  // указатель для строки search
    for (let j = 0; j < check.length; j++) {  // проходим по строке check
        if (check[j] === search[i]) {  // если символы совпадают
            i++;  // двигаем указатель по search
        }
        if (i === search.length) {  // если все символы из search найдены
            return true;
        }
    }
    return false;  // если не все символы найдены
};

console.log(fuzzysearch('teddy', 'teddy')) // => true
console.log(fuzzysearch('tdy', 'teddy')) // => true
console.log(fuzzysearch('tyd', 'teddy')) // => false
console.log(fuzzysearch('bear', 'teddy')) // => false
console.log(fuzzysearch('ey', 'teddy')) // => true
console.log(fuzzysearch('tet')) // => false