// 检查 value 是否为有效的类数组长度。
// 这个函数基于ToLength.
function isLength(value) {
	return typeof value === "number" && value > -1 && value % 1 === 0 && value <= Number.MAX_SAFE_INTEGER;
}

// console.log(isLength(3));
// console.log(isLength(Number.MIN_VALUE));
// console.log(isLength(Infinity));
// console.log(isLength("3"));
export { isLength };
