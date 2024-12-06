
// O(n^2)
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[minIndex]) {
                minIndex = j;
            }
        }
        let tmp = array[i]
        array[i] = array[minIndex];
        array[minIndex] = tmp;
    }
    return array;
}