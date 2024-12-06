//[1, 4, 5, 10, 8], [1, 8, 7, 9, 5] => [1, 8, 5]

let nums1 = [1, 4, 5, 10, 8];
let nums2 = [1, 8, 7, 9, 5];
// O(n+m)
function intersection(nums1, nums2) {
    const set2 = new Set(nums2);  // Преобразуем nums2 в Set
    const result = [];

    for (let num of nums1) {
        if (set2.has(num)) {  // Проверяем, есть ли num в set2
            result.push(num);
            set2.delete(num);  // Удаляем из set2, чтобы избежать дубликатов
        }
    }

    return result;
}

console.log(intersection(nums1, nums2));  // [1, 8, 5]