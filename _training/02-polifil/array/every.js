// создаем функцию every указав в качестве параметров
// arr - массив
// callback - функция обратного вызова
// thisArg - контекст this, это необязательный параметр
function every(arr, callback, self) {
    for (let index = 0; index < arr.length; index++) {
        if(!callback.call(self, arr[index], index, arr)) {
            return false;
        }
    }
    return true;
}

const everyCheck = every([1,2,3,4], (el)=> {
    return typeof el ==='number';
}, this);

console.log(everyCheck);
