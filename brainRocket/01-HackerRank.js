// 1 What is the output of the following code?
 const numbers = [1, 2, 3, 4, 5];
for (var i = 0; i < numbers.length; i++) {
setTimeout(() => {
    console.log(`Number:${numbers[i]}`);
}, i*1000);
}
// не правильно: мой ответ 5 раз 5
// Ответ: "Number: undefined" 5 раз так как в массиве нет элемента по индексу 5

//2 What is the output of the following code?
// function multiply(a) {
//     return function (b) {
//         return function (c) {
//             return a * b * c;
//         }
//     }
// }
// const double = multiply(2);
// const triple = multiply(3);
// console.log(triple(double(4)(5))(1));
// правильно
// Ответ; 120

// 3 Wich design pattern is used in this code?
// class Car {
//     constructor(doors, engine, color) {
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
//     }
// }
// class CarType {
//     createCar(type) {
//         switch (type) {
//             case 'hatchback':
//                 return new Car(3, 'v6', 'grey');
//             case 'sedan':
//                 return new Car(5, 'v8', 'black');
//         }
//     }
// }
//
// const carType = new CarType();
// const sedan = carType.createCar('sedan');
// const hatchback = carType.createCar('hatchback');
// правильно
//Ответ: это Factory pattern

//4 What is the output of the following code?
// const person1 = {
//     name: 'John Doe',
//     age: 30,
//     getDetails: function () {
//         return `${this.name} is ${this.age} years old.`;
//     }
// }
//
// const person2 = {
//     name: 'Jane Doe',
//     age: 25,
// }
//
// console.log(person1.getDetails.call(person2));
// console.log(person1.getDetails.apply(person2));
// правильно
// Ответ: Jane Doe is 25 years old.Jane Doe is 25 years old

//5 event loop

console.log('start');
setTimeout(()=> console.log('timeout 1'), 0);
setTimeout(()=> console.log('timeout 2'), 0);
Promise.resolve().then(()=> console.log('promise 1'));
Promise.resolve().then(()=> console.log('promise 2'));
console.log('end');
// правильно
// Ответ: start, end, promise 1, promise 2, timeout 1, timeout 2

// 6 Declare variables with const keyword in JS
//A variable declared with const is always globally scoped
//A variable declared with const is always block-scoped
//A variable declared with const can be re-declared
//A variable declared with const can be assigned later
//правильно
// Ответ: только always block-scoped

// 7 localStorage object
// The data in localStorage is stored without an expiration date
// localStorage allows for several data types, including numbers and strings
// All data values stored in the localStorage are stored as strings
// localStorage is used to store limited data sizes. It's usually restricted to just a few megabytes
// правильно
// ответ: все кроме 2 варианта(можно хранить только строки)

// 8 In the global execution context what does the keyword this refer to?
// Select the most accurate answer
// null
// the global object
// the web page
// the web browser
//правильно
// Ответ: the global object

// 9 Which of the following is not primitive data type?
// Array
// Number
// String
// Boolean
// правильно
// Ответ: Array


// 10 Consider the following JS code snippet:
function foo () {
    return 5
}

let myVar = foo; do?

    /*
    Assign the integer 5 to the variable myVar;
    Assign the referece to the function foo to the variable myVar;
    Throw an exception;
    Nothing
     */
// Я ответил  Throw an exception;

// 11 Declare variables with let keyword in JS
//1 - A variable declared with let is always globally scoped
//2 - A variable declared with let is always block-scoped
//3 - A variable declared with let can be re-declared
//4 - A variable declared with let can be assigned later

// правильно
// Ответ: 2, 4

// 12 Reducer; What will be value of the counter after the button is clicked?
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return state + 1;
//         case 'double':
//             return state * 2;
//         default:
//             return state;
//     }
// }
//
// const MyComponent = () => {
//     const [counter, dispatch] = useReducer(reducer, 0);
//     const fire = () => {
//         ['increment', 'double', 'reset', "increment '].forEach(type => dispatch({type}))
//     }
//     return <button onClick={fire}>{counter}</button>
// }
// тут ошибка в последнем типе action ("increment ') пробел в конце
// мы получим ошибку "Unterminated string literal" проект не скомпиллируется
// Не понятно что имеется ввиду, undefined? Но мы не увидим его в кнопке, мы даже кнопку нажать не сможем
// Если это не намеренная ошибка и должно быть 'increment' то 3

//13 How can the component MyChild1 access the test variable without using props?

const MyChild1 = () => {
    return <div>{test}</div>
}
const MyParent = () => {
    const test = 'my data'
    return <MyChild1 />
}
// 1 вариан:Ж  It's not possible with React
// 2 вариант:
// const Context = createContext();
//
// const MyChild1 = () => {
//     const test = useContext(Context);
//     return <div>{test}</div>;
// };
//
// const MyParent = ()
//     const test = 'my data';
//     return (
//         <Context.Provider value={test}>
//             <MyChild1 />
//         </Context.Provider>
//     );
// };
// 3 вариант:
// const MyParent = () => {
// const test = 'my data';
// return (
//     <React.Context value={test}>
//     <MyChild1/>
//     </React.Context>
// }
// 4 вариант:
// const MyChild1 = (props, {test}) => {
//  return <div>{test}</div>;
// }
// const MyParent = () => {
//  const test = 'my data';
// React .createContext(test);
// return ( <MyChild1 /> );
// }

// правильный вариант 2, но в нем пропущены символы '=> {' после кода 'const MyParent = ()'
// возможно это сделано намеренно, однако другие варианты совсем корявые
