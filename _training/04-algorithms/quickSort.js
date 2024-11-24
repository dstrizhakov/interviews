const quickSort = (array) => {
    if (array.length <= 1 ) {
        return array;
    }
    let pivotIndex = Math.floor(array.length/2);
    let pivot = array[pivotIndex];

    let less = [];
    let greater = [];

    for (let i = 0; i < array.length; i++) {
        if (i === pivotIndex) continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }
    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}

const test = [21,24,23,423,54,3534,54,65,54,6,5,46,46,45,6,56,4,1,2,3,4,5,6,7,8,9,0,-1,2,-33]

console.log(quickSort(test))