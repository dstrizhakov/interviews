Object.prototype.get = function(keyChain) {
    const keys = keyChain.split('.');
    let result = this;
    for (let key of keys) {
        result = result[key];
        if(!result) return undefined
    }
    return result;
};

Object.prototype.set = function(chainKeys, value) {
    let result = this;
    const keys = chainKeys.split('.');

    keys.forEach((key, index) => {
        if (index === keys.length - 1) {
            result[key] = value;
        } else {
            if(!result[key]) {
                result[key] = {};
            }
            result = result[key]
        }
    })
};

const array = ["a", "b"];
const elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

function greet() {
    console.log(this.type, "typically sleep between", this.sleepDuration);
}

// const cats = {
//     type: "cats",
//     sleepDuration: "12 and 16 hours",
// };
//
// const dogs = {
//     type: "dogs",
//     sleepDuration: "6 and 12 hours",
// };
//
// greet.call(cats);
// greet.call(dogs);
//
// function Ctor() {}
// const inst = new Ctor();
// console.log(Object.getPrototypeOf(inst) === Ctor.prototype); // true

// console.log(Number.isSafeInteger(9007199254740992));

const string = '[(js){}(grill)()]'

const isBalanced = (string) => {
    let filtered = string.replace(/[a-zA-Z]/g, '');
    const bracketsPairs = ['()', '[]', '{}']
    for (let i = 0; i < filtered.length; i++) {
        bracketsPairs.forEach(element => {
            filtered = filtered.replace(element, '')
        });
    }
    return filtered.length === 0
}

function isBal(s) {
    // Стек для хранения открывающих скобок
    const stack = [];

    // Объект, который сопоставляет открывающие скобки с закрывающими
    const brackets = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    // Перебираем каждый символ строки
    for (let char of s) {
        // Если это открывающая скобка (найдена в объекте brackets)
        if (brackets[char]) {
            // Добавляем её в стек
            stack.push(char);
        }
        // Если это закрывающая скобка
        else if (Object.values(brackets).includes(char)) {
            // Если стек пустой, значит нет соответствующей открывающей скобки
            if (stack.length === 0) {
                return false;
            }

            // Извлекаем последнюю открытую скобку из стека
            const lastOpeningBracket = stack.pop();

            // Проверяем, совпадает ли закрывающая скобка с последней открытой
            if (brackets[lastOpeningBracket] !== char) {
                return false;
            }
        }
    }

    // Если в стеке остались элементы, значит, не все скобки были закрыты
    return stack.length === 0;
}

console.log(isBalanced(string));
console.log(isBal(string));