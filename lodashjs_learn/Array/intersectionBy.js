// 这个方法类似_.intersection，区别是它接受一个 iteratee 调用每一个arrays的每个值以产生一个值，通过产生的值进行了比较。
// 结果值是从第一数组中选择。iteratee 会传入一个参数：(value)。
import { getIterator } from "../utils.js";

function intersectionBy(...args) {
	const length = args.length - 1;
	if (length < 1) {
		return [];
	}
	let iteratee = getIterator(args[args.length - 1]);
	let res = args[0].map(iteratee);
	for (let i = 1; i < length; i++) {
		res = res.filter((item) => {
			const temp = args[i].map(iteratee);
			return temp.includes(item);
			//先迭代每一项,再看看
		});
	}
	// 过滤第一个数组中的值
	return args[0].filter((item) => {
		return res.includes(iteratee(item));
	});
}

console.log(intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor));
console.log(intersectionBy([{ x: 1 }], [{ x: 2 }, { x: 1 }], "x"));
