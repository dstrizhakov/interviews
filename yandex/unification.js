// Объединение (слияние) сортированных списков
// Описание
// Есть два сортированных списка (массива). Нужно написать функцию, которая
// делает новый сортированный список с объединением элементов
// этих двух списков.
// Пример:
// 1-ый список: 1, 2, 2, 5, 7, 14
// 2-й список: 4, 6, 6, 7, 9, 14, 15
// Объединение: 1, 2, 2, 4, 5, 6, 6, 7, 7, 9, 14, 14, 15

const first =  [1, 2, 2, 5, 7, 14];
const second = [4, 6, 6, 7, 9, 14, 15];

function getUnification(a1, a2) {
    let res = [],
        i = 0, // index for a1;
        j = 0; // index for a2;
    while (i !== a1.length && j !== a2.length) {
        if (a1[i] < a2[j]) {
            res.push(a1[i]);
            i++;
        }
        if (a1[i] === a2[j]) {
            res.push(a1[i], a2[j]);
            i++, j++;
        }
        if (a1[i] > a2[j]) {
            res.push(a2[j]);
            j++;
        }
    }
    return res.concat(i === a1.length ? a2.slice(j) : a1.slice(i));
}

// const getUnification = ((a1,a2)=>a1.concat(a2).sort((a,b)=>a-b));

console.log(getUnification(first, second));
// console.log(getUnification(second, first));

// два варианта здесь. первый закоменчен