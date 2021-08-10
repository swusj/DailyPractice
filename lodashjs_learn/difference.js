//创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
//（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用SameValueZero做相等比较。
//结果值的顺序是由第一个数组中的顺序确定。
//首先明确几种相等比较方式

// 1. ===      
// NaN NaN  false
// 0 -0     true

// 2. SameValue      (Object.is())
// NaN NaN  true
// 0 -0     false

// 3. SameValueZero  (暂未提供API,但includes()就用的这个)
// NaN NaN  true
// 0 -0     true


// https://262.ecma-international.org/6.0/#sec-samevaluezero

function SameValueZero(a, b){  
    if(Object.is(a,NaN)&& Object.is(b,NaN)){
        return true
    }
    return a === b
}

console.log(SameValueZero(NaN,NaN))  // true
console.log(SameValueZero(0,-0))     // true

function difference(array, values) {
    return array.filter((item) => {
        for (let i = 0; i < values.length; i++) {
            return !values.includes(item)  //不存在的保留
        }
    })
}

const array = [3, 2, 1, 0]
const values = [4, 2, -0]

let test = difference(array, values)
console.log(test)
console.log(array)
console.log(values)