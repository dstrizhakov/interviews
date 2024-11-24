/*
Условие задачи
На Авито размещено множество товаров, каждый из которых представлен числом. У каждого покупателя есть потребность в товаре, также выраженная числом.

Если точного товара нет, покупатель выбирает ближайший по значению товар, что вызывает неудовлетворённость, равную разнице между его потребностью и купленным товаром.
Количество каждого товара не ограничено, и один товар могут купить несколько покупателей. Рассчитайте суммарную неудовлетворённость всех покупателей.

Нужно написать функцию, которая примет на вход два массива: массив товаров и массив потребностей покупателей, вычислит сумму неудовлетворённостей всех покупателей
и вернет результат в виде числа.

Пример
# Пример
# ввод
goods = [8, 3, 5]
buyerNeeds = [5, 6]
# вывод
res = 1 # первый покупатель покупает товар 5 и его неудовлетворённость = 0, второй также покупает товар 5 и его неудовлетворённость = 6-5 = 1
*/

function calculateDissatisfaction(goods, buyerNeeds) {
    goods.sort((a, b) => a - b);
    let totalDissatisfaction = 0;
    for (let need of buyerNeeds) {
        let pos = binarySearch(goods, need);
        let bestMatch = Infinity;
        if (pos < goods.length) {
            bestMatch = Math.abs(goods[pos] - need);
        }
        if (pos > 0) {
            bestMatch = Math.min(bestMatch, Math.abs(goods[pos - 1] - need));
        }

        totalDissatisfaction += bestMatch;
    }

    return totalDissatisfaction;
}

// Бинарный поиск для нахождения позиции товара
function binarySearch(arr, target) {
    let left = 0, right = arr.length;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left;
}





// // Пример
let goods = [8, 3, 5];
let buyerNeeds = [5, 6];
// console.log(calculateDissatisfaction(goods, buyerNeeds));  // Вывод: 1

/*
Сортировка массива товаров занимает 𝑂(mlogm), где m — количество товаров.
Для каждого покупателя бинарный поиск работает за 𝑂(log𝑚), и для всех покупателей время работы будет O(nlogm)
Итог: O(mlogm+nlogm), что эффективно для больших входных данных.
 */

function calculateDissatisfaction1(goods, buyerNeeds) {
    let totalDissatisfaction = 0;
    for (let need of buyerNeeds) {
        let bestMatch = Infinity;
        for (let good of goods) {
            bestMatch = Math.min(bestMatch, Math.abs(good - need));
        }
        totalDissatisfaction += bestMatch;
    }
    return totalDissatisfaction;
}

// console.log(calculateDissatisfaction1(goods, buyerNeeds));  // Вывод: 1

/* Время работы:
    Для каждого покупателя мы проходим по всем товарам, то есть для каждого покупателя выполняется операция O(m).
    В сумме, если у нас 𝑛 покупателей m товаров, сложность будет O(n * m).

В этом решении сложность будет линейной по числу покупателей и товаров, что хуже, чем решение с бинарным поиском,
но оно более простое и не требует сортировки и бинарного поиска.
Если количество товаров и покупателей будет достаточно небольшим, этот подход вполне подходит.
Однако для больших объемов данных лучше использовать бинарный поиск, как в предыдущем решении.
 */


function simpleCalc(goods, needs) {
    let total = 0;
    needs.forEach(need => {
        let best = Infinity;
        goods.forEach(good => {
            best = Math.min(best, Math.abs(good - need))
        })
        total += best
    })
    return total;
}

// console.log(simpleCalc(goods, buyerNeeds));

function diffCalc(goods, needs) {
    goods.sort();
    return needs.reduce((total, need) => {
        const pos = binSear(goods, need);
        const rightResult = pos < goods.length ? Math.abs(goods[pos] - need) : Infinity;
        const leftResult = pos > 0 ? Math.abs(goods[pos - 1] - need) : Infinity;
        return total + Math.min(rightResult, leftResult);
    }, 0)
}

function binSear(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid
        }
        console.log(arr, arr[left], arr[right])
    }
    return left;
}

// console.log(diffCalc(goods, buyerNeeds));

function binSearch (goods, need) {
    let left = 0, right = goods.length - 1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        const current = goods[mid];
        if (current < need) {
            left = mid + 1
        } else {
            right = mid;
        }
        console.log(goods, goods[left], goods[right])
    }
    return left
}


function getDissatisfaction (goods, needs) {
    goods.sort((a, b) => a - b);
    let total = 0;
    for (let need of needs) {
        let pos = binSearch(goods, need);
        let nearest = Infinity;
        if (pos < goods.length) {
            nearest = Math.abs(goods[pos] - need)
        }
        if (pos > 0) {
            nearest = Math.min(nearest, Math.abs(goods[pos - 1] - need))
        }
        total += nearest;
    }
    return total;
}

console.log(getDissatisfaction(goods, buyerNeeds));