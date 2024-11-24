/* 1
Мы хотим проверять режим логгера, чтобы не выводить лишние сообщения в консоль.
Мы ожидаем, что в каждой (отмеченной точке) будет 'This is Dev mode'.
Всё ли работает верно?
*/

const logger = {
    mode: 'Dev',
    check() {
        console.log(`This is ${this.mode} mode`); // исправленно на шаблонные литералы?
    }
};

const stage = {
    mode: 'Staging',
    check() {
        console.log(`This is ${this.mode} mode`);  // исправленно на шаблонные литералы?
    }
};

logger.check(); // => ? (1) Здесь this указывает на объект logger, поэтому this.mode будет равен "Dev", и в консоль выведется: This is Dev mode

const loggerCheck = logger.check.bind(logger).bind(stage);
loggerCheck(); // => ? (2) При использовании .bind() на функции, первый вызов bind уже привязывает this к logger, и дальнейшие вызовы bind (в данном случае с stage) не изменяют this.

function execute(fn) {
    return fn();
}
execute(logger.check.bind(logger)); // => ? (3) Функция execute просто вызывает переданную функцию, а bind(logger) гарантирует, что this указывает на logger, независимо от того, как check вызывается.

//если шаблонные литералы есть в коде то все ок, выведется везде  This is Dev mode