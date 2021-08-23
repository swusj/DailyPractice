//使用SameValueZero 等值比较，返回首次 value 在数组array中被找到的 索引值， 如果 fromIndex 为负值，将从数组array尾端索引进行匹配。
//额，怎么又和描述不一样，是fromIndex为负，从0开始找；fromIndex超过了数组长度，直接返回-1
function indexOf(array, value, fromIndex = 0) {
    return array.indexOf(value, fromIndex)
}
console.log(indexOf([1, 2, 1, 2], 2))
console.log(indexOf([1, 2, 1, 2], 2, 2))
console.log(indexOf([1, 2, 1, 2], 0))
console.log(indexOf([1, 2, 1, 2], 2, -9))
console.log(indexOf([1, 2, 1, 2], 2, 9))

console.log(indexOf("123", "3", 0))

