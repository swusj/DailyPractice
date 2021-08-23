// 执行深比较来确定两者的值是否相等。
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

// console.log(a === b);

export { isEqual };
