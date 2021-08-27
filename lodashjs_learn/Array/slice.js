import { isArray } from "../myType.js";
// 裁剪数组array，从 start 位置开始到end结束，但不包括 end 本身的位置

// Note: 这个方法用于代替Array#slice 来确保数组正确返回。
function slice(array, start = 0, end = array.length) {
	if (isArray(array) || typeof array === "string") {
		return array.slice(start, end);
	}
	return [];
}

const array = [1, 2, 3];
const string = "123";

console.log(slice(array, 0, 2));
console.log(slice(string, 0, 2));

console.log(slice({}, 0, 2));
console.log(slice(NaN, 0, 2));
