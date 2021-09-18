// 创建一个剔除所有给定值的新数组，剔除值的时候，使用SameValueZero做相等比较。
function pull(array, ...values) {
	let res = array.concat(array);
	for (let i = 0; i < array.length; i++) {
		if (values.includes(array[i])) {
			array.splice(i, 1);
			i--;
		}
	}
	return array;
}

// var array = [1, 2, 3, 1, 2, 3];
// pull(array, 2, 3);
// console.log(array);

export { pull };
