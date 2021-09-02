// 检查 value 是否为一个整数。

// 注意: 这个方法基于Number.isInteger.
function isInteger(value) {
	return Number.isInteger(value);
}
console.log(isInteger(3));
console.log(isInteger(Number.MIN_VALUE));
console.log(isInteger(Infinity));
console.log(isInteger("3"));
console.log(isInteger(-3));

export { isInteger };
