// 01 нужно вернуть массив уникальых значений
// const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];
function getUniqueArray(array) {
    return [...new Set(array)];
}


