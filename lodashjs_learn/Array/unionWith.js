import { isEqual } from "../Lang/isEqual.js";
import { isArray } from "../myType.js";
// 这个方法类似_.union ，除了它接受一个 iteratee （迭代函数），调用每一个数组（array）的每个元素以产生唯一性计算的标准。iteratee 会传入一个参数：(value)。
// 返回一个新的联合数组。

// 比较器返回为假才加入并集的意思
function unionWith(...args) {
	let res = [];
	let comparator = null;
	if (isArray(args[args.length - 1])) {
		// 如果最后一个参数是数组，那么就全返回假
		comparator = function (value) {
			return false;
		};
	} else {
		comparator = args.pop();
	}
	for (let array of args) {
		if (isArray(array)) {
			// array里的每一项，针对res每一项，都要comparator
			for (let item of array) {
				if (res.length === 0) {
					res.push(item);
					continue;
				}
				// 每一项都要与res比较都为假才能加入并集
				if (
					res.every((resItem) => {
						if (!comparator(resItem, item)) {
							return true;
						} else {
							return false;
						}
					})
				) {
					res.push(item);
				}
			}
		}
	}
	return res;
}

var objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
];
var others = [
	{ x: 1, y: 1 },
	{ x: 1, y: 2 },
];

console.log(unionWith(objects, others, isEqual));
console.log(unionWith(objects, others));
