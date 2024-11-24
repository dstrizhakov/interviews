// var topKFrequent = function(nums, k) {
//     // 1. Подсчитаем частоту каждого элемента
//     const freqMap = new Map();
//     nums.forEach(num => {
//         freqMap.set(num, (freqMap.get(num) || 0) + 1);
//     });
//
//     // 2. Используем кучу для нахождения k самых частых элементов
//     const minHeap = new MinPriorityQueue({ priority: (x) => x[1] }); // очередь с приоритетом по частоте (второй элемент пары)
//
//     // 3. Заполняем кучу с размером не больше k
//     for (const [num, freq] of freqMap) {
//         minHeap.enqueue([num, freq]);
//         if (minHeap.size() > k) {
//             minHeap.dequeue();
//         }
//     }
//
//     // 4. Возвращаем результат
//     const result = [];
//     while (minHeap.size() > 0) {
//         result.push(minHeap.dequeue().element[0]);
//     }
//
//     return result;
// };

function topKFrequent(nums, k) {
    const freqMap = new Map();
    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });
    const freqArray = Array.from(freqMap.entries());
    freqArray.sort((a, b) => b[1] - a[1]);
    return freqArray.slice(0, k).map(item => item[0]);
};

/*
Сложность:
Время:
Подсчет частоты — O(n), где n — длина массива nums.
Преобразование карты в массив — O(m), где m — количество уникальных элементов.
Сортировка — O(m log m), где m — количество уникальных элементов.
Суммарно: O(n + m log m). В худшем случае m может быть равно n, тогда сложность будет O(n log n).
Память:
O(m), где m — количество уникальных элементов в массиве, так как мы создаем массив для хранения частот.
 */

let nums = [1,1,1,2,2,3,3,3,4,4,5], k = 2

console.log(topKFrequent(nums, k))
