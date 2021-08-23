import { isEqual, isFalse } from "../utils.js";

// 这个方法类似_.difference ，除了它接受一个 comparator （注：比较器），它调用比较array，values中的元素。
// 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。
function differenceWith(array, values, comparator) {
  if (isFalse(comparator) || comparator === []) {
    comparator = isEqual;
  } else if (typeof comparator === "function") {
    comparator = comparator;
  } else {
    return false;
  }

  return array.filter((arrItem) => {
    return values.some((valItem) => {
      //是与values中的每一项都要进行comparator处理
      return comparator(arrItem, valItem);
    });
  });
}

let objects = [
  { x: 1, y: 2 },
  { x: 2, y: 1 },
];

console.log(differenceWith(objects, [{ x: 1, y: 2 }], isEqual));
console.log(differenceWith(objects, [{ x: 1, y: 2 }]));
console.log(differenceWith(objects, [{ x: 1, y: 2 }], ""));
console.log(differenceWith(objects, [{ x: 1, y: 2 }], ""));
console.log(differenceWith(objects, [{ x: 1, y: 2 }], NaN));
console.log(differenceWith(objects, [{ x: 1, y: 2 }], null));
console.log(differenceWith(objects, [{ x: 1, y: 2 }], undefined));
console.log(differenceWith([1, 2, 4], [1, 4, 5], isEqual));

console.log(differenceWith(objects, [{ x: 1, y: 2 }], {}));
console.log(differenceWith(objects, [{ x: 1, y: 2 }], 1));
console.log(differenceWith(objects, [{ x: 1, y: 2 }], []));
console.log(differenceWith(objects, [{ x: 1, y: 2 }], "11"));
