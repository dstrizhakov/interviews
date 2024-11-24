function twoElders(ages) {
    ages.sort((a, b) => a - b);
    return ages.slice(-2);
}

console.log(twoElders([1, 32, 3, 5, 5]));