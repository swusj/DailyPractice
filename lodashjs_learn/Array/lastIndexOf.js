// 这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
import { SameValueZero } from "../utils.js";
function lastindexOf(array, value, fromIndex = array.length - 1) {
	if (fromIndex < 0) {
		fromIndex = array.length - Math.abs(fromIndex);
	} else if (fromIndex > array.length - 1) {
		fromIndex = array.length - 1;
	}
	for (let i = fromIndex; i >= 0; i--) {
		if (SameValueZero(array[i], value)) {
			return i;
		}
	}
	return -1;
}
console.log(lastindexOf([1, 2, 1, 2], 2));
console.log(lastindexOf([1, 2, 1, 2], 2, 2));
console.log(lastindexOf([1, 2, 1, 2], 0));
console.log(lastindexOf([1, 2, 1, 2], 2, -9));

console.log(lastindexOf([1, 2, 1, 2], 2, -3));
console.log(lastindexOf([1, 2, 1, 2], 2, 9));

console.log(lastindexOf("123", "3", 2));
