// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
function dropRight(array, n = 1) {
    let realArray = []

    n = Number(n)

    if (Array.isArray(array)) {
        realArray = array
    } else if (typeof array === "string") {
        realArray = array.split("")
    } else {
        return []
    }

    if (n > realArray.length) {
        return []
    }
    return realArray.slice(0, array.length - n)
}

console.log(dropRight([1, 2, 3], 1))
console.log(dropRight([1, 2, 3], 2))
console.log(dropRight([1, 2, 3], 3))
console.log(dropRight([1, 2, 3], 5))
console.log(dropRight([1, 2, 3]))
console.log(dropRight())

console.log(dropRight("paper", 1))
console.log(dropRight([], 1))
console.log(dropRight(true, 1))
console.log(dropRight({}, 1))
console.log(dropRight(function () { }, 1))

console.log(dropRight([1, 2, 3], ""))
console.log(dropRight([1, 2, 3], "1"))
console.log(dropRight([1, 2, 3], "1,2"))
console.log(dropRight([1, 2, 3], { test: 1 }))
console.log(dropRight([1, 2, 3], {}))
console.log(dropRight([1, 2, 3], []))
console.log(dropRight([1, 2, 3], [1]))
console.log(dropRight([1, 2, 3], [1, 2]))

console.log(dropRight([1, 2, 3], -1))