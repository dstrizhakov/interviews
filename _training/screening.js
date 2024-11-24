const transactions = [
	['usd', 'buy', 10000],
	['usd', 'sell', 5000],
	['gbp', 'buy', 9000],
	['eur', 'sell', 7000],
	['uah', 'buy', 10000],
	['usd', 'sell', 25000]
];

const result = {
	usd: [10000, 30000],
	gbp: [9000, 0],
	eur: [0, 7000],
	uah: [10000, 0]
}

function calculateByCurrency(transactions) {
	const result = {};

	transactions.forEach((subarray) => {
		const [currency, type, ammount] = subarray;
		if (!result[currency]) {
			result[currency] = [0, 0];
		}
		if (type === 'buy') {
			result[currency][0] += ammount;
		} else if (type === 'sell') {
			result[currency][1] += ammount;
		}
	})


	return result
}