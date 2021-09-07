import { toArray } from "../utils.js";
// 获取除了array数组第一个元素以外的全部元素。
function tail(array) {
	array = toArray(array);
	return array.slice(1);
}
console.log(tail([1, 2, 3]));
console.log(tail([]));
console.log(tail("123"));
