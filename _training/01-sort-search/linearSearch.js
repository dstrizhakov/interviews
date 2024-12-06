const test = [21,24,23,423,54,3534,54,65,54,6,5,46,46,45,6,56,4,1,2,3,4,5,6,7,8,9,0,-1,2,-33]


function linearSearch(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) return i
    }
    return -1;
}