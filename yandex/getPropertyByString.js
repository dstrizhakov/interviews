/**
 * Нужно написать функцию get. На вход функция принимает объект и путь до поля объекта.
 * Путь – это строка, разделенная точкой. Функция должна вернуть соответствующее поле объекта.
 * Запрашиваемого поля в объекте может не быть.
 */

function get(obj, path) {
    let current = obj;
    const keys = path.split('.');

    for (let key of keys) {
        if (typeof current === 'object' && current !== null) {
            current = current[key];
        } else {
            current = undefined;
            break;
        }
    }
    console.log(current);
    return current;
}

const obj = {
    a: {
        b: {
            c: 'd'
        },
        e: 'f',
        g: ['h', 'i', 'j'],
        h: null,
        j: undefined,
    }
};

get(obj, 'a.b');   // { c : 'd' }
get(obj, 'a.b.c'); // 'd'
get(obj, 'a.e');   // 'f'
get(obj, 'a.x.e'); // undefined
get(obj, 'a.g.1'); // 'i'
get(obj, 'a.h.null'); // 'undefined'
get(obj, 'a.j'); // 'undefined'
