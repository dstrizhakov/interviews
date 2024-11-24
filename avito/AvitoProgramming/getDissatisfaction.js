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

function binSearch (goods, need) {
    let left = 0, right = goods.length - 1;
    while(left < right) {
        let mid = Math.floor((left + right) / 2);
        goods[mid] < need ? left = mid + 1 : right = mid
    }
    return left
}


function getDissatisfaction (goods, needs) {
    goods.sort((a, b) => a - b);
    return needs.reduce((total, need) => {
        let pos = binSearch(goods, need);
        const rightDiff = pos < goods.length ? Math.abs(goods[pos] - need) : Infinity;
        const leftDiff = pos > 0 ? Math.abs(goods[pos - 1] - need) : Infinity;
        return total + Math.min(rightDiff, leftDiff);
    }, 0)
}

goods = [8, 3, 5]
buyerNeeds = [5, 6]

console.log(getDissatisfaction(goods, buyerNeeds));