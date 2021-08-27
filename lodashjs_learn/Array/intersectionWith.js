import { isEqual } from "../Lang/isEqual.js";

// 这个方法类似_.intersection，区别是它接受一个 comparator 调用比较arrays中的元素。结果值是从第一数组中选择。comparator 会传入两个参数：(arrVal, othVal)。
function intersectionWith(object, ...args) {
	const length = args.length;
	let comparator = args[length - 1];
	let res = object;
	for (let i = 0; i < length - 1; i++) {
		if (res === []) {
			return [];
		}
		res = res.filter((arrVal) => {
			// 每一个item都要与args[i]中每一项进行比较,
			return args[i].some((othVal) => {
				return comparator(arrVal, othVal);
			});
		});
	}
	return res;
}

var objects = [
	{ x: 1, y: 2 },
	{ x: 2, y: 1 },
	{ x: 3, y: 3 },
];
var others = [
	{ x: 1, y: 1 },
	{ x: 1, y: 2 },
];
var middle = [
	{ x: 1, y: 2 },
	{ x: 3, y: 3 },
];

console.log(intersectionWith(objects, others, isEqual));
console.log(intersectionWith(objects, middle, others, isEqual));
