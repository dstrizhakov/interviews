function checkForFactor (base, factor) {
    return base % factor < 1
}

console.log(checkForFactor(10, 2))
console.log(checkForFactor(63, 7))
console.log(checkForFactor(2450, 5))
console.log(checkForFactor(24612, 3))

console.log(checkForFactor(9, 2))
console.log(checkForFactor(653, 7))