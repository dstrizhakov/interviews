
///УСЛОВИЕ=============================================
// напишите свою реализацию метода bind которая будет привязывать контекст к функции
// и передавать дополнительные аргументы

// Простое решене через apply
Function.prototype.newBindWithApply = function (ctx, ...args) {
    let func = this;
    return function (...newArgs) {
      return func.apply(ctx, [...args, ...newArgs])
    }
}

// решение без apply
Function.prototype.newBindWithoutApply = function (ctx, ...args) {
    let allArguments = args;
    ctx.fnToCall = this;
    return function (...newArgs) {
      allArguments = [...allArguments, ...newArgs]
      return ctx.fnToCall(...args)
    }
}



function printNameAge (argumentPassed) {
    console.log(this.name, this.age, argumentPassed)
}

let p1 = printNameAge.newBindWithoutApply({name:'foo', age: 20}, 'Without Apply Default Argument')();
// Output: 'foo' 20 'Without Apply Default Argument'
let p2 = printNameAge.newBindWithoutApply({name:'bar', age: 40})('Without Apply Calling Argument');
// Output: 'bar' 40 'Without Apply Calling Argument'
let p3 = printNameAge.newBindWithApply({name:'foo', age: 20}, 'With Apply Default Argument')();
// Output: 'foo' 20 'With Apply Default Argument'
let p4 = printNameAge.newBindWithApply({name:'bar', age: 40})('With Apply Calling Argument');
// Output: 'bar' 40 'Without Apply Calling Argument'