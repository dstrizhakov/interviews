// найти сумму всех интервалов в массиве исключая пересечения

const interval = [[1,2], [7,9], [6,10], [11,15]];

//  результат 2-1 + 10-6 + 15-11 = 9

const mergeIntervals = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0])

    const merged = [];

    // Объединяем пересекающиеся интервалы
    for (let i = 0; i < intervals.length; i++) {
        const current = intervals[i];

        // Если массив пуст, просто добавляем интервал
        if (merged.length === 0) {
            merged.push(current);
        } else {
            const last = merged[merged.length - 1];

            // Если текущий интервал пересекается с последним, объединяем их
            if (current[0] <= last[1]) {
                last[1] = Math.max(last[1], current[1]);
            } else {
                // Если не пересекается, добавляем новый интервал
                merged.push(current);
            }
        }
    }
    return merged.reduce((sum, interval) => sum + (interval[1] - interval[0]), 0);
}

console.log(mergeIntervals(interval));