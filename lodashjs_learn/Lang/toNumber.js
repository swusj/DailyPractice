// 转换 value 为一个数字。
function toNumber(value) {
	return Number(value);
}
// console.log(toNumber(undefined));
// console.log(toNumber(null));
// console.log(toNumber(true));
// console.log(toNumber(false));
// console.log(toNumber(23));
// console.log(toNumber("123测试"));
// console.log(toNumber("123"));

// const obj = { a: 1 };
// const obj = { a: 1 };
// console.log(toNumber(obj));
// const symbol1 = Symbol("123");
// console.log(toNumber(symbol1));
export { toNumber };
