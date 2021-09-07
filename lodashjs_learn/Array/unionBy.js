import { getIterator } from "../utils.js";
import { isArray } from "../myType.js";
// 这个方法类似_.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。
function unionBy(...args) {
	const res = [];
	const map = new Map();
	let iteratee = null;
	if (isArray(args[args.length - 1])) {
		// 如果最后一个参数是数组，那么和union没有区别
		iteratee = function (value) {
			return value;
		};
	} else {
		iteratee = getIterator(args.pop());
	}

	for (let array of args) {
		// 进行合并的必须要是数组
		if (isArray(array)) {
			for (let item of array) {
				if (!map.has(iteratee(item))) {
					// map的has也是基于SameValueZero哦
					res.push(item);
					map.set(iteratee(item), item);
				}
			}
		}
	}
	return res;
}

console.log(unionBy([2.1], [1.2, 2.3], Math.floor));
console.log(unionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
console.log(unionBy([2.1], [1.2, 2.3]));
console.log(unionBy([1, 2], Math.floor, [1.1, 2, 3]));
