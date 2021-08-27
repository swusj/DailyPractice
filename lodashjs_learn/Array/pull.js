// 移除数组array中所有和给定值相等的元素，使用SameValueZero 进行全等比较。
function pull(array, ...values) {
	for (let i = 0; i < array.length; i++) {
		if (values.includes(array[i])) {
			array.splice(i, 1);
			i--;
		}
	}
	return array;
}

var array = [1, 2, 3, 1, 2, 3];
pull(array, 2, 3);
console.log(array);
