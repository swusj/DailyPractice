// 这个方法类似_.indexOf ，区别是它是从右到左遍历array的元素。
import { SameValueZero } from "../utils.js";
//使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
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
