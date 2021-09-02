import { toInteger } from "./toInteger.js";
import { MAX_ARRAY_LENGTH } from "../config.js";
// 转换 value 为用作类数组对象的长度整数。

// 注意: 这个方法基于ToLength,哎呀，怎么Infinity不一样,ToLength规则是要返回MAX_SAFE_INTEGER，
// 这里测出来是返回表示32位无符号整数的十进制最大值4294967295(2的32次方减一)
function toLength(value) {
	let len = toInteger(value);
	if (len < 0) {
		return 0;
	} else {
		return Math.min(len, MAX_ARRAY_LENGTH);
	}
}
console.log(toLength(3.2));
console.log(toLength(Number.MIN_VALUE));
console.log(toLength(Infinity));
console.log(toLength(-Infinity));
console.log(toInteger("3.2"));
console.log(toLength(-3.2));
