// Дано целое число n. Требуется вывести все правильные
// скобочные последовательности длины 2 ⋅ n,
// упорядоченные лексикографически
// (см. https://ru.wikipedia.org/wiki/Лексикографический_порядок).
// Условие: 1 <= n <= 11

function getParentheses(n) {
    const result = [];

    function generate(current, countOpen, countClose) {
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }
        if (countOpen < n) {
            generate(current + '(', countOpen + 1, countClose);
        }

        if (countClose < countOpen) {
            generate(current + ')', countOpen, countClose + 1);
        }
    }
        generate('', 0, 0);
        return result;
    }

console.log(getParentheses(5));