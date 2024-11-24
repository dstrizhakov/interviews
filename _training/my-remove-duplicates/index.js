// findSet function return array of unique elements
// from array with duplecates

const findSet = (array) => {
	return array
		.filter((element, index, array) =>
			array.findIndex(el => el === element) === index
		)
}


const arr = [6, 3, 2, 4, "6", 3, 2, "6", 7, 8, 45, 3, 22, 4, 55, 54, 3221, 1];
console.log(arr, findSet(arr))


const arr1 = [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5];
console.log(arr1, findSet(arr1))



// countDuplicates function return object of unique elements and counts
const countDuplicates = (array) => {
	return array
		.reduce((dict, item) => {
			dict[item] = (dict[item] || 0) + 1;
			return dict
		}, {});
}

console.log(arr, countDuplicates(arr))
console.log(arr1, countDuplicates(arr1))