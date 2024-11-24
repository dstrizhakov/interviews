/*
Мы хотим проверять режим логгера, чтобы не выводить лишние сообщения в консоль.
Мы ожидаем, что в каждой (отмеченной точке) будет 'This is Dev mode'.
Всё ли работает верно?
*/
const logger = {
    mode: 'Dev',
    check() {
        console.log(`This is ${this.mode} mode`);
    }
};

logger.check(); // => ? (1) Тут все работает правильно. в консоли This is Dev mode

const loggerCheck = logger.check; // тут нужно забиндить функцию к объекту logger, logger.check.bind(logger)
loggerCheck(); // => ? (2) This is Dev mode

function execute(fn) {
    return fn();
}
execute(logger.check.bind(logger)); // => ? (3) тут нужно забиндить функцию к объекту logger, execute(logger.check.bind(logger))
// в функции свой this

/////////////////


/*
Что выведется в консоли после выполнения данного кода?
*/
(function () {
    function modifyItemData(price, platform) {
        price.rub = 5000;
        platform = 'iOS';
        isModified = true;

        function printItemData() {
            console.log(price); // ? (4.1) {rub:5000} так как объект находится в замыкании modifyItemData
            console.log(platform); // ? (4.2) 'iOS' // тут свой platform отличный от глобального скоупа, так как в аргументе он есть (это равносильно let)
            console.log(isModified); // ? (4.3) null // isModified находится в глобальном скойпе
        }

        return printItemData;
    }

    let price = { rub: 3500 };
    let platform = 'Android';

    let isModified = false;
    const printItemData = modifyItemData(price, platform, isModified); // тут происходит обновление переменных

    console.log(price); // ? (1) {rub:5000} // обновлено при вызове modifyItemData по ссылке price
    console.log(platform); // ? (2) 'Anroid' // в modifyItemData другая переменная, так как она есть в аргументах функции и фактически объявлена через let
    console.log(isModified); // ? (3) true // обновлено при вызове modifyItemData

    price = { usd: 100 };

    platform = 'Web';
    isModified = null;

    printItemData(); // ? (4)
})()

////////////


/**
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
    console.log('?'); // 1

    async function asyncFn() {
        console.log('?'); // 2
        await Promise.resolve(null);
        console.log('?'); // 4
    }

    asyncFn();

    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
            console.log('?') // 5
        }, 0);
    }).then(() => {
        console.log('?'); // 6
    });

    console.log('?'); // 3
}

checkOrder();


//////////////


/*
на каждый клик на кнопку
1) показать на экране картинку размером 500 x 150, доступной по ссылке “https://random.imagecdn.app/500/150.jpg”
2) при повторном клике должна показаться новая картинка вместо старой
3) до момента загрузки показывать плейсхолдер размером с картинку (например, прямоугольник 500 x 150 зеленого цвета)
4) в случае ошибки загрузки показать плейсхолдер ошибки (например, прямоугольник 500 x 150 красного цвета)
5) в случае успешной загрузки нужно вывести console.log с текстом, что картинка загрузилась

<main>
    <div id="image-container"></div>
    <button id="image-loading-button">
      Load Image
    </button>
</main>

 */

// <script>
const container = document.getElementById('image-container');
const button = document.getElementById('image-loading-button');

button.addEventListener('click', (e) => {
    const currentImg = container.querySelector('img');
    const img = document.createElement('img');
    img.src = "https://random.imagecdn.app/500/150.jpg"
    img.width = 500;
    img.height = 150;
    img.style.backgroundColor = 'green';
    img.alt = "Picture";

    img.addEventListener('error', () => {
        img.style.backgroundColor = 'red'
    })

    img.addEventListener('load', () => {
        console.log('Картинка загрузилась!')
    })


    if (currentImg) {
        container.replaceChild(img, currentImg);
    } else {
        container.appendChild(img)
    }
})
// </script>


////////


/**
 * Напишите функцию retryFetch поверх fetch API, которая отправляет запрос в случае неудачи N раз
 * Функция принимает те же параметры, что и fetch + количество попыток и возвращает Promise.
 ** Если метод запроса PUT, то повторных запросов не разрешаем
 ** Если пользователь НЕАВТОРИЗОВАН или У НЕГО НЕТ ПРАВ, то повторный запрос не делаем
 ** Если количество попыток закончилось, то вернуть последнюю ошибку в reject
 */

/**
 * @returns {Promise<unknown>}
 */
function retryFetch(url, { method, headers }, attempts = 1) {
    return fetch(url, {method, headers})
        .then((res) => {
            if(!res.ok) throw res;
            return res
        }).catch (err => {
            const isRefetch = method !== 'PUT' && [401, 403].includes(res.status)
            if (attempts && isRefetch) {
                return retryFetch(url, {method, headers}, attempts - 1)
            } else {
                return err
            }
        })
}

retryFetch(url, { method: 'GET', headers: { Authorization: 'Bearer token' } }, 3);

////////////





