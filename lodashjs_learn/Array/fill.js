// 使用 value 值来填充（替换） array，从start位置开始, 到end位置结束（但不包含end位置）。

// Note: 这个方法会改变 array（注：不是创建新数组）。

function fill(array, value, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
        array[i] = value
    }
    return array
}

var array = [1, 2, 3];

console.log(fill(array, 'a'))
console.log(fill(array, 2))
console.log(fill([4, 6, 8, 10], '*', 1, 3))
console.log(fill([4, 6, 8, 10], '*', 1))