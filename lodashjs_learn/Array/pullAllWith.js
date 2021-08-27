import { isEqual } from "../Lang/isEqual.js";

// 这个方法类似于_.pullAll，区别是这个方法接受 comparator 调用array中的元素和values比较。
// comparator 会传入两个参数：(arrVal, othVal)。
// 注意: 和_.differenceWith 不同, 这个方法会改变数组 array。
function pullAllWith(array, values, comparator) {
	for (let i = 0; i < array.length; i++) {
		values.forEach((value) => {
			if (comparator(value, array[i])) {
				array.splice(i, 1);
				i--;
			}
		});
	}
}

var array = [
	{ x: 1, y: 2 },
	{ x: 3, y: 4 },
	{ x: 5, y: 6 },
];
pullAllWith(array, [{ x: 3, y: 4 }], isEqual);
console.log(array);
