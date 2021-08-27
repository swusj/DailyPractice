// 将 array 中的所有元素转换为由 separator 分隔的字符串。
function join(array, separator = ",") {
	let res = array.join(separator);
	return res;
}

console.log(join(["a", "b", "c"], "~"));
