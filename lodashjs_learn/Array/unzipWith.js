import unzip from "./unzip.js";
import add from "../Math/add.js";
import zip from "./zip.js";
// 此方法类似于_.unzip，除了它接受一个iteratee指定重组值应该如何被组合。iteratee 调用时会传入每个分组的值： (...group)。
function unzipWith(array, iteratee) {
	let res = [];
	let unzipArray = unzip(array);
	if (iteratee) {
		unzipArray.forEach((array) => {
			let temp = undefined;
			array.forEach((item) => {
				temp = iteratee(temp, item);
			});
			res.push(temp);
		});
	}
	return res;
}

var zipped = zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]
console.log(unzipWith(zipped, add));
