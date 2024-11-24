// Задача 6. Дан массив чисел [0,2,4,7,11,1,5,8,9,3].
// Необходимо вернуть строку вида '0-5, 7-9, 11'.
// Таким образом строка представляет собой диапазон чисел в массиве.

// const arr = [0,2,4,7,11,1,5,8,9,3,1, 12,14,19,222];
const arr = [0,2,4,7,11,1,5,8,9,3];

const findIntervals = (arr) => {
    arr = [...new Set(arr)].sort((a, b) => a - b);  // Убираем дубликаты и сортируем
    const ranges = [];
    let start = arr[0];
    let end = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === end + 1) {
            end = arr[i];  // Продолжаем текущий диапазон
        } else {
            ranges.push(start === end ? `${start}` : `${start}-${end}`);
            start = end = arr[i];  // Начинаем новый диапазон
        }
    }

    ranges.push(start === end ? `${start}` : `${start}-${end}`);  // Добавляем последний диапазон
    return ranges.join(', ');
}


console.log(findIntervals(arr));