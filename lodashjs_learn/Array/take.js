import { toArray } from "../utils.js";

// 创建一个数组切片，从array数组的起始元素开始提取n个元素。
function take(array, n = 1) {
	n = Number(n);
	array = toArray(array);
	return array.slice(0, n);
}

console.log(take([1, 2, 3]));
console.log(take([1, 2, 3], 2));
console.log(take([1, 2, 3], 5));
console.log(take([1, 2, 3], 0));
