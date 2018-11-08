function fn(arr) {
	return arr.map(el => ({
		...el,
		a: true,
	}));
}
