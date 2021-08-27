//创建唯一值的数组，这个数组包含所有给定数组都包含的元素，使用SameValueZero进行相等性比较。（注：可以理解为给定数组的交集）
function intersection(...args) {
	let length = args.length;
	let res = args[0];
	for (let i = 1; i < length; i++) {
		if (res === []) {
			return res;
		}
		res = res.filter((item) => {
			return args[i].includes(item);
		});
	}
	return res;
}

console.log(intersection([2, 1], [4, 2], [1, 2]));
