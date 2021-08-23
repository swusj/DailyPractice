import { toArray } from "../utils.js";
//获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。
//注：不改变参数数组，返回的新数组

function initial(array) {
  const temp = toArray(array);
  return temp.slice(0, array.length - 1);
}

console.log(initial([1, 2, 3]));
console.log(initial("123"));
console.log(initial({}));
