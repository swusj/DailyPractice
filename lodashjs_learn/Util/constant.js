// 创建一个返回 value 的函数。
function constant(value) {
	return function () {
		return value;
	};
}

export { constant };
