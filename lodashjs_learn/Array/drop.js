import { toArray } from "../utils.js";

//创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
function drop(array, n = 1) {
	array = toArray(array);
	n = Number(n) >= 0 ? Number(n) : 0; //  校验 n 是不是正整数

	return array.slice(n);
}

const arr = [1, 2, 3];
console.log(drop(arr, 1));
console.log(arr);
console.log(drop([1, 2, 3], 1));
console.log(drop([1, 2, 3], 2));
console.log(drop([1, 2, 3], 5));
console.log(drop([1, 2, 3]));
console.log(drop());

console.log(drop("paper", 1));
console.log(drop([], 1));
console.log(drop(true, 1));
console.log(drop({}, 1));
console.log(drop(function () {}, 1));

console.log(drop([1, 2, 3], ""));
console.log(drop([1, 2, 3], "1"));
console.log(drop([1, 2, 3], "1,2"));
console.log(drop([1, 2, 3], { test: 1 }));
console.log(drop([1, 2, 3], {}));
console.log(drop([1, 2, 3], []));
console.log(drop([1, 2, 3], [1]));
console.log(drop([1, 2, 3], [1, 2]));

console.log(drop([1, 2, 3], -1));
