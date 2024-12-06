// ?СУММА ЭЛЕМЕНТОВ ЧЕРЕЗ ЗАМЫКАНИЕ
const add = (a, b) => {
	if (b !== undefined) return a + b;
	return (c) => a + c;
}

console.log(add(2, 7));
console.log(add(2)(7));

// ?СУММА ЭЛЕМЕНТОВ ЧЕРЕЗ ЗАМЫКАНИЕ
const sum = (n) => (i) => typeof i === 'number' ? sum(n + i) : n

console.log(sum(2)(7)(1)(5)(8)());

//?ПОЛУЧИТЬ РАСШИРЕНИЕ ФАИЛА ИЗ СТРОКИ
const someFileName = 'snidfedfdfddexe.exe'

const getExtension = (filename) => {
	if (typeof filename !== 'string') throw new Error('Invalid parameter type')
	const parts = filename.split('.');
	return parts.length === 1 ? null : parts[parts.length - 1]
}

console.log(getExtension(someFileName));

//?ГЛУБИНА ДЕРЕВА ЭЛЕМЕНТОВ DIV
//const app = document.getElementById('app'); // получаем родительскии элемент

const { log } = console;

const treeDepth = (divEl, currentLevel) => {
	if (divEl.children.length === 0) return currentLevel;
	let maxDeph = currentLevel;
	Array.from(divEl.children).forEach((element) => {
		maxDeph = Math.max(treeDepth(element, currentLevel + 1), maxDeph)
	})
	return maxDeph;
}

//log(treeDepth(app, 0))