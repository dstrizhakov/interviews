// 03 Написать функцию memo, которая принимает функцию и возвращает функцию
const getKey = (...args) => {
    let key = '';
    args.forEach(arg => {
        key += String(arg)
    })
    return key
}

const memo = (cb) => {
    const cache = {}
    return (...args) => {
        let key = getKey(...args)
        if (cache[key]) {
            return cache[key]
        } else {
            const res = cb(...args)
            cache[key] = res
            return res
        }
    }
}

const pow = (a) => a * a
const memoized = memo(pow)
memoized(4)