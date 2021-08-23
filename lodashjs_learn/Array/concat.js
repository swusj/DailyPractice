// 创建一个新数组，将array与任何数组 或 值连接在一起。
function concat(array, ...args) {   //这里还是要用这个。。。因为这个就是不定有多少个的参数
    let res = []
    res = res.concat(array)
    for (let i = 0; i < args.length; i++) {
        res = res.concat(args[i])
    }
    return res
}
const array = [1]
const str = "123"
const obj = { test: 1 }
const func = function () { }

console.log(concat(array, 2, [3], [[4]], [1, [2], [3]]))
console.log(concat(str, 2, [3], [[4]], [1, [2], [3]]))
console.log(concat(obj, 2, [3], [[4]], [1, [2], [3]]))
console.log(concat(str, obj))
console.log(concat(str, func))
console.log(concat(str))

// 这是没有用concat()方法实现的冗余的实现方法
// function shallowCopy(array) {  //数组浅拷贝
//     var target = []
//     for (let i = 0; i < array.length; i++) {
//         target[i] = array[i]
//     }
//     return target
// }

// //创建一个新数组，将array与任何数组 或 值连接在一起。
// //concat整体来说是浅拷贝的
// let array = [1];
// function concat(array) {
//     let i = 1
//     let newArray = shallowCopy(array)
//     while (i < arguments.length) {
//         if (Array.isArray(arguments[i])) {  //如果参数是数组，就添加数组中的第一层元素
//             let temp = shallowCopy(arguments[i])  
//             for (let j = 0; j < (temp.length); j++) {
//                 newArray.push(temp[j])
//             }
//             i++
//         } else {
//             newArray.push(arguments[i++])
//         }

//     }
//     return newArray
// }