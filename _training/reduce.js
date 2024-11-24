// reduce lifehacks

/*
Метод reduce() принимает два параметра: функцию-колбэк и начальное значение для аккумулятора.
Сама функция-колбэк может принимать четыре параметра:
acc — текущее значение аккумулятора;
item — элемент массива в текущей итерации;
index — индекс текущего элемента;
arr — сам массив, который мы перебираем.
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// Не забываем, что аккумулятор идет первым!
function findAverage(acc, item, index, arr) {
  const sum = acc + item;
  // Если мы на последнем элементе
  // вычисляем среднее арифметическое делением на кол-во элементов:
  if (index === arr.length - 1) {
    return sum / arr.length;
  }

  return sum;
}

const average = nums.reduce(findAverage, 0);
// 4.5

/*
Метод reduce() крайне полезен, когда мы хотим с помощью манипуляции значениями массива вычислить какое-то новое значение. 
Такую операцию называют агрегацией. Это мощный инструмент для обработки данных: например, его можно использовать для нахождения 
суммы величин в массиве или группировки в другие типы данных.

Задача: вычислить сумму денег на всех счетах.
 */
const bankAccounts = [
  { id: "123", amount: 19 },
  { id: "345", amount: 33 },
  { id: "567", amount: 4 },
  { id: "789", amount: 20 },
];

const totalAmount = bankAccounts.reduce(
  // Аргумент sum является аккумулятором,
  // в нём храним промежуточное значение
  function (sum, currentAccount) {
    // Каждую итерацию берём текущее значение
    // и складываем его с количеством денег
    // на текущем счету
    return sum + currentAccount.amount;
  },
  0 // Начальное значение аккумулятора
);

console.log(totalAmount);
// 76

/*
Если вы хотите применить подряд несколько операций filter и map, то с помощью reduce() их можно объединить в одной функции. 
Иногда это может быть необходимо в целях производительности, поскольку в этом случае будет всего один проход по массиву вместо 
нескольких в зависимости от количества вызываемых методов. Но стоит помнить, что такой способ не всегда будет хорошо читаться.

Задача: выбрать чётные, вычислить их квадраты и отобрать из них числа больше 50.
  */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filterEven(num) {
  return num % 2 === 0;
}

function square(num) {
  return num * num;
}

function filterGreaterThanFifty(num) {
  return num > 50;
}

const result = numbers.reduce(function (res, num) {
  if (filterEven(num)) {
    const squared = square(num);

    if (filterGreaterThanFifty(squared)) {
      res.push(squared);
    }
  }

  return res;
}, []);

console.log(result);
// [64, 100]

/*
Часто встречается использование reduce() для нормирования значений. Например, для превращения массива с данными пользователей 
в объект, где ключом будет ID пользователя, а значением — исходный объект. Таким образом можно быстро получать значение 
объект-пользователя по id, обратившись по ключу к объекту, вместо поиска по массиву:
*/

const users = [
  { id: "123", name: "Vasiliy", age: 18 },
  { id: "345", name: "Anna", age: 22 },
  { id: "567", name: "Igor", age: 20 },
  { id: "789", name: "Irina", age: 24 },
];

const usersById = users.reduce(function (result, user) {
  result[user.id] = {
    name: user.name,
    age: user.age,
  };

  return result;
}, {});

console.log(usersById["567"]);
// { name: 'Igor', age: 20 }
