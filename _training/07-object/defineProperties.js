const obj = Object.create(Object.prototype);

Object.defineProperties(obj, {
    property1: {
        value: true,
        writable: true,
        enumerable: true,
    },
    property2: {
        value: "Hello",
        writable: false,
        enumerable: true,
    },
    property3: {
        value: "Hello",
        writable: false,
        enumerable: false,
    }
});


Object.defineProperty(obj, 'property4', {
    value: 42,
    writable: false,
    enumerable: true
});

console.log(obj); // { property1: true, property2: 'Hello', property4: 42 } "property3" - не перечисляемое свойство

console.log(Object.getOwnPropertyNames(obj)); // [ 'property1', 'property2', 'property3', 'property4' ]