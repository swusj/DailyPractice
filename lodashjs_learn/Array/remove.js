import { getIterator } from "../utils.js";
// 移除数组中predicate（断言）返回为真值的所有元素，并返回移除元素组成的数组
// predicate（断言） 会传入3个参数： (value, index, array)。

function remove(array, predicate) {
	let iteratee = getIterator(predicate);
	const res = [];
	for (let i = 0; i < array.length; i++) {
		if (iteratee(array[i])) {
			res.push(...array.splice(i, 1));
			i--;
		}
	}
	return res;
}

var array = [1, 2, 3, 4];
var evens = remove(array, function (n) {
	return n % 2 == 0;
});

console.log(array);
console.log(evens);
