// 02 Что будет в консоли? Напиши реализацию через Promise.all
function resolveAfter2Seconds(x) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(x);
        }, 2000);
    });
}

async function add1(x) {
    const a = await resolveAfter2Seconds(20);
    const b = await resolveAfter2Seconds(30);
    return x + a + b;
}

async function add2(x) {
    const promise_a = resolveAfter2Seconds(20);
    const promise_b = resolveAfter2Seconds(30);
    return x + (await promise_a) + (await promise_b);
}
add1(10).then(console.log);
add2(20).then(console.log);