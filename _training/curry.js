//========================================================================================
// каррирование
//========================================================================================
const currySimple =
  (fn) =>
  (...args) => {
    if (fn.length > args.length) {
      const binded = fn.bind(null, ...args);
      return currySimple(binded);
    } else {
      return fn(...args);
    }
  };

// Usage
const sum4 = (a, b, c, d) => a + b + c + d;

const curried = currySimple(sum4);
const y1 = sum4(1, 2, 3, 4);
const y2 = curried(1)(2, 3)(4);
const y3 = curried(1)(2)(3)(4);
console.log(y1, y2, y3);

//========================================================================================
// можно переписать короче, на мой взгляд читаемость не хуже
//========================================================================================
const curry =
  (fn) =>
  (...args) =>
    fn.length > args.length ? curry(fn.bind(null, ...args)) : fn(...args);
// Usage
const f = curry(sum4);
const v2 = f(1)(2, 3)(4);
const v3 = f(1)(2)(3)(4);
console.log(y1, v2, v3);

//========================================================================================
// Каррирование с начальными аргументами rest //
//========================================================================================

const cur = (fn, ...args) =>
  fn.length > args.length
    ? cur.bind(null, fn.bind(null, ...args))
    : fn(...args);

// Usage
const w = cur(sum4, 4, 3);
const e2 = w(1, 2);
const e3 = w(1)(2);
console.log(y1, e2, e3);

//========================================================================================
// Каррирование с произвольным количеством аргументов
// https://medium.com/nuances-of-programming/%D0%B1%D0%B5%D1%81%D0%BA%D0%BE%D0%BD%D0%B5%D1%87%D0%BD%D0%BE%D0%B5-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-9e46cf4abff9
//========================================================================================

const infiniteCurry = (fn) => {
  const next = (...args) => {
    return (x) => {
      if (!x) {
        return args.reduce((acc, a) => {
          return fn.call(fn, acc, a);
        }, 0);
      }
      return next(...args, x);
    };
  };
  return next();
};

const iSum = infiniteCurry((x, y) => x + y);
console.log(iSum(1)(3)(4)(2)());

//========================================================================================
// Каррирование с произвольным количеством аргументов и начальными аргуметнами
//========================================================================================

const infiniteCurrySeed = (fn, seed) => {
  const reduceValue = (args, seedValue) =>
    args.reduce((acc, a) => {
      return fn.call(fn, acc, a);
    }, seedValue);
  const next = (...args) => {
    return (...x) => {
      if (!x.length) {
        return reduceValue(args, seed);
      }
      return next(...args, reduceValue(x, seed));
    };
  };
  return next();
};

const iSumS = infiniteCurrySeed((x, y) => x + y, 0);
const iMul = infiniteCurrySeed((x, y) => x * y, 1);
console.log(iSumS(1)(3, 4)(5, 6)(7, 8, 9)()); // 43
console.log(iMul(1)(3, 4)(5, 6)()); // 360
