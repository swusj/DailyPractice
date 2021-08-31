import { getIterator } from "../utils.js";
// 创建一个组成对象，key（键）是经过 iteratee（迭代函数） 执行处理collection中每个元素后返回的结果，
// 每个key（键）对应的值是 iteratee（迭代函数）返回该key（键）的次数（注：迭代次数）。
// iteratee 调用一个参数：(value)。
function countBy(collection, iteratee) {
	const myIteratee = getIterator(iteratee);
	const res = {};
	let res_keys = [];
	for (let item of collection) {
		if (res_keys.includes(myIteratee(item))) {
			res[myIteratee(item)] = res[myIteratee(item)] + 1;
		} else {
			res_keys.push(myIteratee(item));
			res[myIteratee(item)] = 1;
		}
	}
	return res;
}

console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(["one", "two", "three"], "length"));
