/**
 * Необходимо написать функцию, которая на вход принимает объект
 * и убирает из него все falsy значения
 * falsy значение - это такое значение value, для которого Boolean(value) === false
 * считаем, что obj - результат выполнения JSON.parse, то есть plain object
 */
function filterFalsy(struct) {
    if (Array.isArray(struct)) {
        return struct.filter(Boolean).map(filterFalsy);
    } else if (typeof struct === 'object' && struct !== null) {
        const result = {};
        for (let key in struct) {
            if (Boolean(struct[key])) {
                if (typeof struct[key] === 'object') {
                    result[key] = filterFalsy(struct[key]);
                } else {
                    result[key] = struct[key];
                }
            }
        }
        return result
    }
    return struct
}

console.log(filterFalsy([null, 0, false, 1])); // => [1]
console.log(filterFalsy({ 'a': null, 'b': [false, 1] })); // => { 'b': [1] }
console.log(filterFalsy([null, 0, 5, [0], [false, 16]])); // => [5, [], [16]]
