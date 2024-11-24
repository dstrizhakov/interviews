// Удалить дубликаты из массива и вернуть новый.
let arr = [5, 2, 2, 2, 4, 8, 8, 4, 2,1,1];
function deleteDuplicates(arr) {
    // let res = {};
    // arr.map(num => res[num] = num);
    // return Object.values(res);

    return [...new Set(arr)];

}
console.log(deleteDuplicates(arr));