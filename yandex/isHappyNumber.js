/*
Счастливые числа
дано число 19
Нужно выяснить является ли число счастливым
Чтобы узнать является ли число счастливым возводим каждую цифру в квадрат и складываем,
1*1 + 9*9 = 82
если сумма квадратов равна 1 то возвращаем true
если нет повторяем
8*8 + 2*2 = 68
повторяем пока не получим 1, в конце выводим false
 */

const num = 19;

function isHappyNumber(num) {
const hash = new Set();
while (num !== 1) {
    if (hash.has(num)) {
        return false;
    }
    hash.add(num);
    num = sumOfSquares(num)
}
return true

    function sumOfSquares(num) {
    return num.toString().split('').reduce((sum, digit) => {
        return sum + Math.pow(+digit, 2)
    }, 0)
    }
}

console.log(isHappyNumber(num))