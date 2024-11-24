function groupBy(iterable, cb) {
    return [...iterable].reduce((acc, element, index) => {
        const key = String(cb(element, index));
        acc[key] ??= [];
        acc[key].push(element);
        return acc
    }, Object.create(null))
}

console.log(groupBy(["destructor", "constructor", "destructor"], x => x));
