// 减少一级array嵌套深度。
function flatten(array) {
  const result = [];
  let temp = [];
  if (typeof array === "string") {
    temp = array.split("");
  } else if (Array.isArray(array)) {
    temp = temp.concat(array);
  }
  for (let i = 0; i < temp.length; i++) {
    if (Array.isArray(temp[i])) {
      temp[i].forEach((element) => {
        result.push(element);
      });
    } else {
      result.push(temp[i]);
    }
  }
  return result;
}

console.log(flatten([1, [2, [3, [4]], 5]]));
console.log(flatten({}));
console.log(flatten("1234"));
console.log(flatten([1, [2, [3, [4]], 5], "123"]));
