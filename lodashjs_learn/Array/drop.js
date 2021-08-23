import { toArray } from "../utils.js";

//创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
function dropRight(array, n = 1) {
  let realArray = toArray(array);
  n = Number(n) >= 0 ? Number(n) : 0; //  校验 n 是不是正整数

  return realArray.slice(n);
}

console.log(dropRight([1, 2, 3], 1));
console.log(dropRight([1, 2, 3], 2));
console.log(dropRight([1, 2, 3], 5));
console.log(dropRight([1, 2, 3]));
console.log(dropRight());

console.log(dropRight("paper", 1));
console.log(dropRight([], 1));
console.log(dropRight(true, 1));
console.log(dropRight({}, 1));
console.log(dropRight(function () {}, 1));

console.log(dropRight([1, 2, 3], ""));
console.log(dropRight([1, 2, 3], "1"));
console.log(dropRight([1, 2, 3], "1,2"));
console.log(dropRight([1, 2, 3], { test: 1 }));
console.log(dropRight([1, 2, 3], {}));
console.log(dropRight([1, 2, 3], []));
console.log(dropRight([1, 2, 3], [1]));
console.log(dropRight([1, 2, 3], [1, 2]));

console.log(dropRight([1, 2, 3], -1));
