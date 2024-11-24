// Необходимо написать функцию для подсчета суммы всех числовых значений в массиве.
// Валидными числовыми значениями являются так же строки, которые начинаются с цифр.
// В этом случае в качестве числового значения нужно использовать эту начальную
// последовательность цифр.
// Массив может содержать любые типы данных, быть не плоским.
function sumNumbersInArray(arr) {
    let sum = 0;
    let flattened = [...arr].flat(Infinity);

    for (let el of flattened) {
        if (!isNaN(+el)) {
            sum += +el;
        } else if (typeof el === 'string') {
            let i = 0;
            while (!isNaN(el[i])) {
                i++;
            }
            sum += Number(el.slice(0, i));
        }
    }
    return sum;
}

const arr = [1, 'x', '2x', ['30x', ['x2', '5', [12, [[['1488lol934568e4w3']]]]]]]
console.log(sumNumbersInArray(arr));


function sumRecursive(arr) {
    let total = 0;

    // Рекурсивная функция для обработки всех вложенных массивов
    function processElement(element) {
        if (Array.isArray(element)) {
            // Если элемент массив, рекурсивно обрабатываем его элементы
            for (let subElement of element) {
                processElement(subElement);
            }
        } else if (typeof element === 'number') {
            // Если элемент число, добавляем его в сумму
            total += element;
        } else if (typeof element === 'string') {
            // Если элемент строка, ищем начальную числовую часть
            let match = element.match(/^\d+/);
            if (match) {
                total += Number(match[0]);
            }
        }
    }

    // Запускаем обработку исходного массива
    processElement(arr);

    return total;
}

console.log(sumRecursive(arr));