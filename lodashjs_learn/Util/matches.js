// 创建一个深比较的方法来比较给定的对象和 source 对象。 如果给定的对象拥有相同的属性值返回 true，否则返回 false。
// 部分比较匹配空数组和空对象源值，分别针对任何数组或对象的价值。

function matches(obj, source, map = new Map()) {
	if (obj === source) {
		return true;
	}
	if (map.has(obj) || map.has(source)) {
		return true;
	}
	map.set(obj, source);
	if (typeof obj === "object" && typeof source === "object") {
		const source_keys = Object.keys(source);
		for (let item of source_keys) {
			// 比较source对象的值是否和给定对象的一样
			if (!matches(obj[item], source[item], map)) {
				return false;
			}
		}
		return true;
	}
	return false;
}

// var objects = [
//   { obj: 1, source: 2, c: 3, d: { e: 3, f: { g: 5 } } },
//   { obj: 4, source: 5, c: 6, d: { e: 3 } },
// ];

// console.log(
//   objects.filter((item) => {
//     return matches(item, { obj: 1, c: 3, d: { e: 3 } });
//   })
// );

export { matches };
