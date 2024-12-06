console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);
// 1 7 3 5 2 6 4

(function() {
    console.log(1);
    setTimeout(function(){console.log(2)}, 1000);
    setTimeout(function(){console.log(3)}, 0);
    Promise.resolve().then(()=> console.log(5)).then(()=> console.log(6));
    console.log(4);
})();
// 1,4,5,6,2,3

console.log(1);
setTimeout(() => console.log(2));
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => setTimeout(() => console.log(4)));
Promise.resolve().then(() => console.log(5));
setTimeout(() => console.log(6));
console.log(7);
Promise.resolve().then(console.log('123'))
async function wait() {
    console.log(8)
    let prom = await new Promise(resolve => {
        console.log(9)
        setTimeout(resolve, 1000)
    });
}
wait()
// timeouts: 2 6 4
// 1 7 123 8 9 3 5 2 6 4