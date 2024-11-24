// Задача 7. Дан массив чисел [2,3,5,1,6].
// В массиве всегда содержатся числа от единицы до n.
// Необходимо вернуть какое число пропустили.
const arr = [2, 3, 5, 1, 6];

function findMissingNumber(arr) {
    const n = arr.length + 1;  // Массив содержит n-1 элементов, поэтому n = arr.length + 1
    const totalSum = (n * (n + 1)) / 2;  // Сумма всех чисел от 1 до n
    const arrSum = arr.reduce((acc, num) => acc + num, 0);  // Сумма элементов массива
    return totalSum - arrSum;  // Пропущенное число
}

console.log(findMissingNumber(arr));
