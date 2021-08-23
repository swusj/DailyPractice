// 将本该是数组的参数转化为数组
function toArray(value) {
  if (Array.isArray(value)) {
    return value;
  } else if (typeof value === "string") {
    return value.split("");
  }
  return [];
}

// 判断参数是否为假值的函数，注：认为 [], {} 不为假值
function isFalse(x) {
  return x === 0 || x === false || x === null || x === "" || x === undefined || Object.is(x, NaN);
}

// console.log(isFalse(0))
// console.log(isFalse(null))
// console.log(isFalse(1))
// console.log(isFalse("222"))
// console.log(isFalse(NaN))
// console.log(isFalse([]))
// console.log(isFalse({}))

// 深比较，比较的是值
function isEqual(a, b, map = new Map()) {
  if (a === b) {
    return true;
  }
  if (map.has(a) || map.has(b)) {
    return true;
  }
  map.set(a, b);
  if (typeof a === "object" && typeof b === "object") {
    const a_keys = Object.keys(a);
    const b_keys = Object.keys(b);
    if (a_keys.length !== b_keys.length) {
      return false;
    } else {
      for (let i = 0; i < a_keys.length; i++) {
        if (!isEqual(a[a_keys[i]], b[b_keys[i]], map)) {
          return false;
        }
      }
      return true;
    }
  }
  return false;
}

// let a = { a: 3, b: { c: 1 } };
// let b = { a: 3, b: { c: 1 } };
// console.log(isEqual(a, b));
export {
  toArray, // 将本该是数组的参数转化为数组
  isFalse, // 判断参数是否为假值的函数，注：认为 [], {} 不为假值
  isEqual, // 粗糙的实现，比较的是值
};
