// создаем функцию some, указав в качестве параметров
// arr - Массив
// callback - Функция обратного вызова
// thisArg - контекст this, это необязательный параметр
function some(arr, callback, self) {
    for (let index = 0; index < arr.length; index++) {
        if(callback.call(self, arr[index], index, arr)) {
            return true;
        }
    }
    return false;
}

const checkSome = some([1,2,'3',4, null], (el)=> {
    return typeof el === 'string';
}, this);

console.log(checkSome);