// 获取array数组的第n个元素。如果n为负数，则返回从数组结尾开始的第n个元素。
function nth(array, n = 0) {
	if (n < 0) {
		n = array.length - Math.abs(n);
	}
	return array[n];
}

var array = ["a", "b", "c", "d"];

console.log(nth(array, 1));
console.log(nth(array, 5));
console.log(nth(array, -2));
