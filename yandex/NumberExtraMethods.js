// Задача 4. Необходимо реализовать возможность
// использования следующей записи:
// (1).plus(5).minus(3)
// и возвращать результат.

Number.prototype.plus = function(x) {
    return this + x
}
Number.prototype.minus = function(x){
    return this - x;
}
console.log(Number.prototype)
console.log((1).plus(5).minus(3));