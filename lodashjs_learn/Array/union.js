// 创建一个按顺序排列的唯一值的数组。所有给定数组的元素值使用SameValueZero做等值比较。（注： arrays（数组）的并集，按顺序返回，返回数组的元素是唯一的）
function union(...arrays) {
  let res = new Set(); //set就是用的SameValueZero哦~
  for (let i = 0; i < arrays.length; i++) {
    arrays[i].forEach((item) => {
      res.add(item);
    });
  }
  return (res = [...res]);
}
// console.log(union([2], [1, 2]));
// console.log(union([1, 2, 5, 6], [1, 7, 5, 6]));

export default union;
