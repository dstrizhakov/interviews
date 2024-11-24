const object = {
    age: 42,
};

console.log(Object.getOwnPropertyDescriptors(object));
// { age: { value: 42, writable: true, enumerable: true, configurable: true } }
console.log(Object.getOwnPropertyDescriptor(object, 'age'));
// { value: 42, writable: true, enumerable: true, configurable: true }

Object.seal(object);
console.log(Object.getOwnPropertyDescriptors(object));
// { age: { value: 42, writable: true, enumerable: true, configurable: false } }
object.age = 43; // тут все ок
console.log(object);
object.name = 'John'; // не дает записать новое свойство
console.log(object);

const object2 = {...object}
console.log(Object.getOwnPropertyDescriptors(object2));
Object.freeze(object2);
console.log(Object.getOwnPropertyDescriptors(object2));
object2.age = 45; // не дает переопределить свойство
Object.defineProperty(object2, "foo", { value: "eit" }); //TypeError:  object is not extensible

console.log(object2);


