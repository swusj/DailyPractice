import { getIterator } from "../utils.js";
// 这个方法类似于_.pullAll ，区别是这个方法接受一个 iteratee（迭代函数） 调用 array 和 values的每个值以产生一个值，通过产生的值进行了比较。
// iteratee 会传入一个参数： (value)。
// 不同于_.differenceBy, 这个方法会改变数组 array。
function pullAllBy(array, values, iteratee) {
	iteratee = getIterator(iteratee);
	values = values.map(iteratee);
	for (let i = 0; i < array.length; i++) {
		if (values.includes(iteratee(array[i]))) {
			array.splice(i, 1);
			i--;
		}
	}
	return array;
}
var array = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 1 }];
pullAllBy(array, [{ x: 1 }, { x: 3 }], "x");
console.log(array);
