// 创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined, 和 NaN 都是被认为是“假值”。
function compact(array) {
    return array.filter((item) => {
        return item !== 0 && item !== false && item !== null && item !== "" && item !== undefined && !Object.is(item,NaN); //注意判断NaN不能用isNaN，这个方法会先将参数强制转化成数字，再判断
    })
}

const array = [0, 1, false, 2, '', 3, null, 0, "", undefined, NaN, "111", '111测试', [1, 'test'], [],{}];
let test = compact(array)
console.log(test)
