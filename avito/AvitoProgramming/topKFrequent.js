//     Условие задачи 2
// Дан массив чисел nums и некоторое неизвестное науке число k.
//     Нужно написать функцию, которая вынимает k самых больших чисел из массива nums.
//
//     Пример 1
// # ввод
// nums = [100, 50, 0, 150, 100, 0, -30, 70]
// k = 3
// # ожидаемый вывод (в любом порядке)
// expected = [100, 150, 100]

// 1. O(N*K) интервьюер задал вопрос как решить с такой сложностью
// 2. O(N*logk) или такой

// по времени О(n + logn) - мое решение на самом деле имеет сложность(О(nlogn))
// по памяти О(n)
function mostKFrequent(nums, k) {
    const freqMap = new Map();

    nums.forEach(num => {
        freqMap.set(num, freqMap.get(num) ?? 1)
    })

    const freqArr = [...freqMap.entries()]
    freqArr.sort((a,b) => b[1] - a[1]); // quick sort
    return freqArr.slice(0, k).map(item => item[0])
}

// этот алгоритм имеет сложность O(n)

var topKFrequent = function(nums, k) {
    // 1. Подсчёт частот
    const freqMap = new Map();
    nums.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });

    // 2. Создание bucket (корзин) сортировки
    const buckets = Array(nums.length + 1).fill(null).map(() => []);
    for (const [num, freq] of freqMap.entries()) {
        buckets[freq].push(num);
    }

    // 3. Сборка top-K частых элементов
    const result = [];
    for (let i = buckets.length - 1; i > 0 && result.length < k; i--) {
        if (buckets[i].length > 0) {
            result.push(...buckets[i]);
        }
    }

    return result.slice(0, k); // Возвращаем ровно k элементов
};

const nums = [100, 50, 0, 150, 100, 0, -30, 70]
const k = 2
console.log(topKFrequent(nums, k))