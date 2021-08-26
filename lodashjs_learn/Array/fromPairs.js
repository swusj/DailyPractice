import { isArray } from "../myType.js";

// 与_.toPairs正好相反；这个方法返回一个由键值对pairs构成的对象。
function fromPairs(pairs) {
	const res = {};
	// 如果不是数组是其他类型，会返回空对象
	if (!isArray(pairs)) {
		return res;
	}
	pairs.forEach((item) => {
		res[item[0]] = item[1];
	});
	return res;
}

const pairs = [
	["fred", 30],
	["barney", 40],
];
console.log(fromPairs(pairs));
console.log(fromPairs(1));
