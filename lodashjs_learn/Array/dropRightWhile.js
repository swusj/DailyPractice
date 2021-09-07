import { getIterator } from "../utils.js";
import { toArray } from "../utils.js";
// 创建一个切片数组，去除array中从 predicate 返回假值开始到尾部的部分。predicate 会传入3个参数： (value, index, array)。
// 怎么感觉和描述不一样。。。测试出来是去掉最后一个假的右边的全真数组（去掉结尾到左的连续真，直到遇到第一个假）
// 字符串，和每一项进行比较，如果是对象，就看对象这个值是真是假
// 数字，返回原来的
// 对象，predicate为比较迭代的每一项和对象是否值相等;
// 数组，数组转化为对象，如果有任一一个属性值相等，就为真
function dropRightWhile(array, predicate) {
	array = toArray(array);
	predicate = getIterator(predicate);

	for (let i = array.length - 1; i >= 0; i--) {
		if (!predicate(array[i], i, array)) {
			//从右到左遇到第一个假
			return array.slice(0, i + 1);
		}
	}
	return [];
}

var users = [
	{ user: "barney", active: true },
	{ user: "fred", active: false },
	{ user: "pebbles", active: false },
];

console.log(
	dropRightWhile(users, function (o) {
		return !o.active;
	})
);
console.log(dropRightWhile(users, { user: "pebbles", active: false }));
console.log(dropRightWhile(users, ["active", false]));
console.log(dropRightWhile(users, "active"));
console.log(dropRightWhile(users, ["active", false, "user", "22"]));
console.log(dropRightWhile(users, [1, "active", false, "user", "22"]));

var test = [1, 2, 3, 4, { test: 1 }];

console.log(dropRightWhile(test, { test: 1 }));
console.log(dropRightWhile(test, []));
console.log(dropRightWhile(test, {}));
console.log(dropRightWhile(test, undefined));
console.log(dropRightWhile(test));
