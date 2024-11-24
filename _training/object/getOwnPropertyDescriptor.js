let o, d;

o = {
    get foo() {
        return 17;
    },
};
d = Object.getOwnPropertyDescriptor(o, "foo");
console.log(d);
// d равен { configurable: true, enumerable: true, get: /*функция геттера*/, set: undefined }

o = { bar: 42 };
d = Object.getOwnPropertyDescriptor(o, "bar");
console.log(d);
// d равен { configurable: true, enumerable: true, value: 42, writable: true }

o = {};
Object.defineProperty(o, "baz", {
    value: 8675309,
    writable: false,
    enumerable: false,
});
d = Object.getOwnPropertyDescriptor(o, "baz");
console.log(d);
// d равен { value: 8675309, writable: false, enumerable: false, configurable: false }
