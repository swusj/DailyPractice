import { toArray } from "../utils.js";
import { getIterator } from "../utils.js";

// 从array数组的起始元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。
function takeWhile(array, predicate) {
	array = toArray(array);

	predicate = getIterator(predicate);

	for (let i = 0; i < array.length; i++) {
		if (!predicate(array[i], i, array)) {
			//从左到右遇到第一个假
			return array.slice(0, i);
		}
	}
	return [];
}

var users = [
	{ user: "barney", active: false },
	{ user: "fred", active: false },
	{ user: "pebbles", active: true },
];

console.log(
	takeWhile(users, function (o) {
		return !o.active;
	})
);
console.log(takeWhile(users, { user: "barney", active: false }));
console.log(takeWhile(users, ["active", false]));
console.log(takeWhile(users, "active"));
console.log(
	takeWhile("123", function (o) {
		return o === "1";
	})
);
