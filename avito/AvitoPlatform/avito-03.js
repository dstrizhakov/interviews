
// 3

/*
Мы разрабатываем приложение через Console Driven Development.
    К сожалению, у нас потерялась часть кода, но остался последний вывод.
    Расставьте тексты для console.log

Последний вывод:
1
2
3
4
5
6
*/

function checkOrder() {
    console.log('1');

    async function asyncFn() {
        console.log('2');
        await Promise.resolve(null);
        console.log('4');
    }

    // new Promise((resolve) => {
    //     console.log('2');
    //     Promise.resolve(null).then(() => console.log('4'));
    // })

    asyncFn();

    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('5')
        }, 0);
    }).then(() => {
        console.log('6');
    });

    console.log('3');
}

checkOrder();