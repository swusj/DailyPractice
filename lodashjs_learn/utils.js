import { property } from "./Util/property.js";
import { matches } from "./Util/matches.js";

// 将本该是数组的参数转化为数组
function toArray(value) {
	if (Array.isArray(value)) {
		return value;
	} else if (typeof value === "string") {
		return value.split("");
	}
	return [];
}

// 判断参数是否为假值的函数，注：认为 [], {} 不为假值
function isFalse(x) {
	return x === 0 || x === false || x === null || x === "" || x === undefined || Object.is(x, NaN);
}

// console.log(isFalse(0))
// console.log(isFalse(null))
// console.log(isFalse(1))
// console.log(isFalse("222"))
// console.log(isFalse(NaN))
// console.log(isFalse([]))
// console.log(isFalse({}))

// 深比较，比较的是值
function isEqual(a, b, map = new Map()) {
	if (a === b) {
		return true;
	}
	if (map.has(a) || map.has(b)) {
		return true;
	}
	map.set(a, b);
	if (typeof a === "object" && typeof b === "object") {
		const a_keys = Object.keys(a);
		const b_keys = Object.keys(b);
		if (a_keys.length !== b_keys.length) {
			return false;
		} else {
			for (let i = 0; i < a_keys.length; i++) {
				if (!isEqual(a[a_keys[i]], b[b_keys[i]], map)) {
					return false;
				}
			}
			return true;
		}
	}
	return false;
}

// let a = { a: 3, b: { c: 1 } };
// let b = { a: 3, b: { c: 1 } };
// console.log(isEqual(a, b));

// 根据迭代器数据类型获取真正的迭代器方法
function getIterator(predicate) {
	let res = function () {
		return true;
	};
	if (Object.is(predicate, NaN) || predicate === undefined) {
		return res;
	}

	switch (typeof predicate) {
		case "function":
			res = predicate;
			break;
		case "string":
			res = property(predicate);
			break;
		case "object":
			if (Array.isArray(predicate)) {
				// 如果是数组，将数组转化为对象
				if (predicate.length === 0) {
					res = function () {
						return false;
					};
					break;
				}
				let temp = {};
				for (let i = 0; i < predicate.length - 1; i++) {
					if (typeof predicate[i] === "string") {
						temp[predicate[i]] = predicate[i + 1];
						i++;
					} else {
						//如果不能转化成对象
						break;
					}
				}
				res = function (item) {
					// 如果有任一一个属性值相等，就为真
					const keys = Object.keys(temp);
					for (let i = 0; i < keys.length; i++) {
						if (matches(item[keys[i]], temp[keys[i]])) {
							return true;
						}
					}
					return false;
				};
			} else {
				//普通对象，就比较是否值相等了
				if (Object.keys(predicate).length === 0) {
					break;
				}
				let temp = predicate;
				res = function (item) {
					return matches(item, temp);
				};
			}
			break;
		default:
			break;
	}
	return res;
}

// 3. SameValueZero  (暂未提供API,但includes()就用的这个)
// NaN NaN  true
// 0 -0     true
function SameValueZero(a, b) {
	if (Object.is(a, NaN) && Object.is(b, NaN)) {
		return true;
	}
	return a === b;
}

export {
	toArray, // 将本该是数组的参数转化为数组
	isFalse, // 判断参数是否为假值的函数，注：认为 [], {} 不为假值
	isEqual, // 粗糙的实现，比较的是值
	getIterator, // 根据迭代器数据类型获取真正的迭代器方法
	SameValueZero, // NaN NaN  true   |     0 -0     true
};
