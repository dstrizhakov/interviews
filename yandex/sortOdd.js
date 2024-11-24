// Задача 2. Есть массив чисел.
// numbersArr = [45,12,36,98,123,2,54,78,63,14];
// Необходимо сортировать которые стоят на нечетных местах. После сортировки результат должен быть таким:
// numbersArr = [45,2,36,12,123,14,54,78,63,98];

const numbersArr = [45,12,36,98,123,2,54,78,63,14];

const sortOdd = (arr) => {
    let oddIndexedElements = arr.filter((_, index) => index % 2 !== 0);
    oddIndexedElements.sort((a, b) => a - b);

   return  arr.map((num, index) => {
        if (index % 2 !== 0) {
            return oddIndexedElements.shift();
        }
        return num;
    });
}

console.log(sortOdd(numbersArr));