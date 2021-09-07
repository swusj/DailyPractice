import { toArray } from "../utils.js";

// 创建一个数组切片，从array数组的最后一个元素开始提取n个元素。
function takeRight(array, n = 1) {
	n = Number(n);
	array = toArray(array);

	if (n > array.length) {
		n = array.length;
	}
	return array.slice(array.length - n);
}

console.log(takeRight([1, 2, 3]));
console.log(takeRight([1, 2, 3], 2));
console.log(takeRight([1, 2, 3], 5));
console.log(takeRight([1, 2, 3], 0));
