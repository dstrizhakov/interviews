/* 2
Что выведется в консоли после выполнения данного кода?
*/

(function () {
    function modifyItemData(price, platform) {
        price.rub = 5000;
        platform = 'iOS';
        isModified = true;

        function printItemData() {
            console.log(price); // ? (4.1)  { rub: 5000 } // находится в замыкании функции
            console.log(platform); // ? (4.2) 'ios' // это локальная переменная в функции
            console.log(isModified); // ? (4.3) null // это глобальная переменная
        }

        return printItemData;
    }

    let price = { rub: 3500 };
    let platform = 'Android';
    let isModified = false;

    const printItemData = modifyItemData(price, platform, isModified);

    console.log(price); // ? (1) { rub: 5000 } // модификация ссылочного типа в функции
    console.log(platform); // ? (2)'Android' // в глобальной области все еще 'Android' так как передается по значению
    console.log(isModified); // ? (3) true // изменено на true в функции так как не опраделена в аргументах

    price = { usd: 100 };

    platform = 'Web';
    isModified = null;

    printItemData(); // ? (4)
})()

// { rub: 5000 }     // (1) price после модификации в modifyItemData
// 'Android'         // (2) platform не изменился в глобальной области
// true              // (3) isModified, установленный на true в modifyItemData
// { rub: 5000 }     // (4.1) price в замыкании printItemData
// 'iOS'             // (4.2) platform локально установлен на iOS в modifyItemData
// null              // (4.3) isModified изменен на null после вызова modifyItemData