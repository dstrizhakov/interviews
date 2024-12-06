//5? find2Sum
//`// [2, 7, 19, 11] , 18 => [7, 11]

let arr = [2, 7, 19, 11];
let target = 18;

function find2Sum(arr, target){
    const cache = {};

    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        const pairIndex = cache[value];

        if (typeof pairIndex !== "undefined") {
            return [arr[pairIndex], arr[i]]
        }
        cache[target - value] = i;
    }

    return []
}

console.log(find2Sum(arr, target));