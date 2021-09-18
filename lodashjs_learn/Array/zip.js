// 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
import { isArray } from "../myType.js";
function zip(...arrays) {
	// res.length = MAX(arrays.item.length),
	// res.item.length = array.length
	let res = [];
	let lengthArray = [];
	arrays.forEach((array) => {
		if (isArray(array)) {
			lengthArray.push(array.length);
		}
	});
	// res.fill([]);  谨记！！不能这样，这样填充的话,每一项数组的地址都是一样的，导致一项数组push变成多项数组都在push
	for (let i = 0; i < Math.max(...lengthArray); i++) {
		// 在这里这样填充就好。。。
		res[i] = [];
	}
	for (let i = 0; i < res.length; i++) {
		arrays.forEach((array) => {
			if (isArray(array)) {
				res[i].push(array[i]);
			}
		});
	}
	return res;
}

// var a1 = ["fred", "barney", "1"];
// var a2 = [30, 40];
// var a3 = [true, false];

// console.log(zip(a1, a2, a3));
// console.log(zip("123", a2, a3));
// console.log(zip("123"));

export default zip;
