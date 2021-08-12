var isEqual = require("./isEqual")

// 该方法类似_.find，区别是该方法返回第一个通过 predicate 判断为真值的元素的索引值（index），而不是元素本身。
function findIndex(array,predicate,fromIndex = 0){
    let temp
    if (Object.is(predicate, NaN) || predicate === undefined) {
        return -1
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
                    return -1
                }
                temp = {}
                for (let i = 0; i < predicate.length - 1; i++) {
                    if (typeof predicate[i] === "string") {
                        temp[predicate[i]] = predicate[i + 1]
                        i++
                    } else {  //如果不能转化成对象
                        return -1
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
                    return -1
                }
                temp = predicate
                predicate = function (item) {
                    return isEqual(item, temp)
                }
            }
            break
        default:
            return -1
    }
    fromIndex = Math.floor(fromIndex)
    for (let i = fromIndex; i<array.length; i++) {
        if (predicate(array[i], i, array)) {  //从右到左遇到第一个假
            return i
        }
    }
    return -1
}

var users = [
    { 'user': 'barney',  'active': false },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': true }
];

console.log(findIndex(users, function(o) { return o.user == 'barney'; }))
console.log(findIndex(users, { 'user': 'fred', 'active': false }))
console.log(findIndex(users, ['active', false]))
console.log(findIndex(users, 'active'))

console.log(findIndex(users, 'active',2))
console.log(findIndex(users, 'active',2.2))
console.log(findIndex(users, 'active',-1))