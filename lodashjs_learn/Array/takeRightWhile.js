import { isArray } from "../myType.js";
import { toArray } from "../utils.js";
import { getIterator } from "../utils.js";
//从array数组的最后一个元素开始提取元素，直到 predicate 返回假值。predicate 会传入三个参数： (value, index, array)。

function takeRightWhile(array, predicate) {
	array = toArray(array);

	predicate = getIterator(predicate);

	for (let i = array.length - 1; i >= 0; i--) {
		if (!predicate(array[i], i, array)) {
			//从右到左遇到第一个假
			return array.slice(i + 1);
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
	takeRightWhile(users, function (o) {
		return !o.active;
	})
);
console.log(takeRightWhile(users, { user: "pebbles", active: false }));
console.log(takeRightWhile(users, ["active", false]));
console.log(takeRightWhile(users, "active"));
