//Conditional Types

type IsString<T> = T extends string ? true : false;

type R =  IsString<'hello'>;
type R1 =  IsString<string>;
type R2 =  IsString<1>;

// пример использования условной типизации
interface User {
    id: string
}
interface Message {
    id: number
}

function getId<T extends {id: any}>(obj: T): T extends {id: string} ? string : number {
return obj.id
}

const r1 = getId({} as User);
const r2 = getId({} as Message)

// очень часто условные типы используются с типом never чтобы исключить определенные типы из выражений
type NotFalsy<T = null> = T extends (null | undefined | false | 0 ) ? never : T;

let z: NotFalsy<string>;
z = 'Hello';
z = null;

// Фильтрация типов
type Filter<T, U> = T extends U ? never : T;
type F = Filter<'a' | 'b' | 'c', 'b'>;  // 'a' | 'c'
const fa: F = 'a';
const fb: F = 'b'; // type 'b' is not assignable to type F
const fc: F = 'c';

// это то же самое что встроенный тип Exclude
type F1 = Exclude<'a' | 'b' | 'c', 'b'>;  // 'a'
const f1a: F1 = 'a';
const f1b: F1 = 'b'; // type 'b' is not assignable to type F
const f1c: F1 = 'c';

//

type TryInfer<T extends object = object> = T extends infer R ? R : never;

type TI = TryInfer<{a: 1}>;

type TryInferTypes<T extends object = object> = T extends infer R ? R[keyof R] : never;

type TIT = TryInferTypes<{a: 1, b:2}>;