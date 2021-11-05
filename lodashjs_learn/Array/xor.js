import union from './union.js';
// 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
function xor(...arrays) {
  // 过滤掉不是数组的元素
  let myArray = arrays.filter((item) => Array.isArray(item));
  let res = [];

  // 遍历传入的数组数组
  for (let i = 0; i < myArray.length; i++) {
    // 将除该数组以外的数组做并集
    let otherUnion = union(...myArray.slice(0, i), ...myArray.slice(i + 1, myArray.length));
    // 给每一个数组先去重
    let unReapeatArray = [...new Set(myArray[i])];
    // 每一个数组取交集的补集
    let xoredArray = unReapeatArray.filter((item) => !otherUnion.includes(item));
    res = res.concat(xoredArray);
  }
  return res;
}

console.log(xor([1, 2, 3, 1, 2, 3]));
console.log(xor([1, 2, 3, 1, 2, 3], [1, 2, 5, 6], [1, 7, 5, 6]));
console.log(xor());
console.log(xor(1, 2));
console.log(xor(1, 2, { a: 1 }, [1]));
