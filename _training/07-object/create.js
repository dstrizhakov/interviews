/*
Метод Object.create() создаёт новый объект с указанным прототипом и свойствами.
Object.create(proto[, propertiesObject])
 */

// полифил
function objectCreate(proto, props = {}) {
    if (typeof proto !== 'object' && proto !== null) {
        throw new TypeError("TypeError: Object prototype may only be an Object or null");
    }
    function F() {}
    // F.__proto__ = proto;

    const obj = new F();
    Object.setPrototypeOf(obj, proto);

    // это можно не делать есть не нужны опции
    if (props) {
        if (typeof props !== 'object') {
            throw new TypeError("TypeError: properties must be an object");
        }
        for (propety in props) {
            if (props.hasOwnProperty((propety))) {
                Object.defineProperty(obj, propety, props[propety]);
            }

        }
       }
    return obj;
}

const obj = Object.create(null);

const obj1= objectCreate(null);

console.log(Object.getPrototypeOf(obj));
console.log(Object.getPrototypeOf(obj1));


