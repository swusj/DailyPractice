import { toArray } from "../utils.js";
// 将数组拆分为二维数组
function chunk(array, size) {
  const result = [];

  if (size === 0) {
    return [];
  }

  let realArray = toArray(array);
  const length = realArray.length;

  let j = 0;

  while (j < length) {
    let temp = [];

    for (let i = 0; i < size; i++) {
      temp.push(realArray[j]);
      j += 1;

      if (j >= length) {
        break;
      }
    }

    result.push(temp);
  }

  console.log(result);

  return result;
}

const array = ["a", "b", "c", "d", "e"];
const str1 = "paper";
const str2 = "123445";
const func = function () {};
const obj = { test: 1 };

console.log(chunk(array, 0));
chunk(array, 1);
chunk(array, 2);
chunk(array, 3);
chunk(array, 4);
chunk(array, 5);
chunk(array, 6);

chunk(str1, 2);
chunk(str2, 2);

console.log(chunk(func, 2));
console.log(chunk(obj, 2));
