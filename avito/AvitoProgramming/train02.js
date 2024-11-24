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

function getDissatisfactionSimple(goods, needs) {
    let total = 0;
    for (let need of needs) {
        let best = Infinity;
        for (let good of goods) {
            best = Math.min(best, Math.abs(good - need))
        }
        total += best
    }
    return total
}

let goods = [8, 3, 5];
let buyerNeeds = [5, 6];

console.log(getDissatisfactionSimple(goods, buyerNeeds));

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left < right){
        let mid = Math.floor((left + right) / 2);
        (arr[mid] < target) ? (left = mid + 1) : ( right = mid )
    }
    return left;
}

function getDis (goods, needs) {
    goods.sort((a,b) => a - b);
    return needs.reduce((total, need) => {
        const pos = binarySearch(goods, need);
        const rightValue = pos < goods.length ? Math.abs(goods[pos] - need) : Infinity;
        const leftValue = pos > 0 ? Math.abs(goods[pos - 1] - need) : Infinity;
        return total + Math.min(leftValue, rightValue)
    }, 0)
}

console.log(getDis(goods, buyerNeeds))