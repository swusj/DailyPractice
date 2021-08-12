var isEqual = require("./isEqual")

// 创建一个切片数组，去除array中从起点开始到 predicate 返回假值结束部分。
// predicate 会传入3个参数： (value, index, array)。
function dropWhile(array, predicate) {
    let temp
    if (Object.is(predicate, NaN) || predicate === undefined) {
        return []
    }
    switch (typeof predicate) {
        case "function":
            break
        case "string":
            temp = predicate
            predicate = function (item) {
                if (typeof item !== "object") {
                    return false
                } else {
                    return item[temp]
                }
            }
            break
        case "number":
            return array;
        case "object":  
            if (Array.isArray(predicate)) { //将数组转化为对象
                if (predicate.length === 0) {
                    return array
                }
                temp = {}
                for (let i = 0; i < predicate.length - 1; i++) {
                    if (typeof predicate[i] === "string") {
                        temp[predicate[i]] = predicate[i + 1]
                        i++
                    } else {  //如果不能转化成对象
                        return array
                    }
                }
                predicate = function (item) {       // 如果有任一一个属性值相等，就为真
                    const keys = Object.keys(temp)
                    for (let i = 0; i < keys.length; i++) {
                        if (temp[keys[i]] === item[keys[i]]) {
                            return true
                        }
                    }
                    return false
                }
            } else {             //普通对象，就比较是否值相等了
                if (Object.keys(predicate).length === 0) {
                    return []
                }
                temp = predicate
                predicate = function (item) {
                    return isEqual(item, temp)
                }
            }
            break
        default:
            return array
    }

    for (let i = 0; i <array.length; i++) {
        if (!predicate(array[i], i, array)) {  //从左到右遇到第一个假
            return array.slice(i,array.length)
        }
    }
}

var users = [{ 'user': 'barney', 'active': false }, { 'user': 'fred', 'active': false }, { 'user': 'pebbles', 'active': true }];

console.log(dropWhile(users, function (o) { return !o.active; }))
console.log(dropWhile(users, { 'user': 'barney', 'active': false }))
console.log(dropWhile(users, ['active', false]))
console.log(dropWhile(users, 'active'))
console.log(dropWhile(users, ['active', false, 'user', "22"]))
console.log(dropWhile(users, [1, 'active', false, 'user', "22"]))

var test = [1, 2, 3, 4, { test: 1 }]

console.log(dropWhile(test, { test: 1 }))
console.log(dropWhile(test, []))
console.log(dropWhile(test, {}))
console.log(dropWhile(test, undefined))
console.log(dropWhile(test))