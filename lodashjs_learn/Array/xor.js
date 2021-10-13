// 创建一个给定数组唯一值的数组，使用symmetric difference做等值比较。返回值的顺序取决于他们数组的出现顺序。
function xor(...arrays) {
  let myArray = arrays.filter((item) => Array.isArray(item));
  return myArray.reduce(reducer, []);
}
// 这是reduce方法接收的reducer方法，第一个参数为前面迭代的结果，第二个为当前索引
function reducer(prevRes, currentArray) {
  // 先去下重
  let unReapeatArray = new Set(currentArray);
  return prevRes.concat(
    [...unReapeatArray].filter((item) => !prevRes.includes(item))
  );
}

console.log(xor([1, 2, 3, 1, 2, 3]));
console.log(xor([1, 2, 3, 1, 2, 3], [1, 2, 5, 6], [1, 7, 5, 6]));
console.log(xor());
console.log(xor(1, 2));
console.log(xor(1, 2, { a: 1 }, [1]));
