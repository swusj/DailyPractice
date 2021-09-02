import { toNumber } from "./toNumber.js";
// 转换 value 为用作类数组对象的长度整数。
// 注意: 这个方法基于ToInteger.   ToInteger的规则是如果是正无穷或负无穷，返回原值。lodash这个测出来是返回Number.MAX_VALUE或者-Number.MAX_VALUE
function toInteger(value) {
	let number = toNumber(value);
	if (Object.is(number, NaN)) {
		return 0;
	} else if (value === 0) {
		return number;
	} else if (value === Infinity) {
		return Number.MAX_VALUE;
	} else if (value === -Infinity) {
		return -Number.MAX_VALUE;
	}
	if (number < 0) {
		return -Math.floor(Math.abs(number));
	} else {
		return Math.floor(number);
	}
}

// console.log(toInteger(3.2));
// console.log(toInteger(Number.MIN_VALUE));
// console.log(toInteger(Infinity));
// console.log(toInteger(-Infinity));
// console.log(toInteger("3.2"));
// console.log(toInteger(-3));

export { toInteger };
