const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
//Сложность сортировки — не менее O(n log n).


// O(log n)
function binarySearch (array, value) {
    let start = 0, end = array.length;
    let middle;
    let found = false;
    let position = -1;
    while (!found && start <= end) {
        middle = Math.floor((start + end) / 2);
        if (array[middle] === value) {
            found = true;
            position = middle;
            return position;
        }
        if (value < array[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return position;
}

console.log(binarySearch(array, 16))