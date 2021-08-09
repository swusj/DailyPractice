//创建一个具有唯一array值的数组，每个值不包含在其他给定的数组中。
//（注：即创建一个新数组，这个数组中的值，为第一个数字（array 参数）排除了给定数组中的值。）该方法使用SameValueZero做相等比较。
//结果值的顺序是由第一个数组中的顺序确定。
//首先明确几种相等比较方式
// The Abstract Equality Comparison Algorithm ( ==）
// The Strict Equality Comparison Algorithm ( === )
// SameValue (Object.is())
// SameValueZero (暂未提供API)

//--------SameValue----------------------------------------------------------------------
// Object.is(NaN, NaN) // true
// Object.is(0, -0) // false
// 而Object.is内部采用的比较算法就是SameValue(x, y)，而它与 === 的区别也正是这两种情况。

// -------SameValueZero-----------------------------------------------------------
// const s = new Set()
// s.add(0)
// s.add(NaN)
// s.has(-0) // true
// s.has(NaN) // true

// 是不是与上述的三种算法的表现多不一样，这就是第四种比较算法SameValueZero，它与SameValue的区别主要在于0与-0是否相等。

// 所以你在实践includes方法时，遇到：
// const a = [0, NaN]
// a.includes(-0) // true
// a.includes(NaN) // true

// 就不用大惊小怪了，因为includes内部使用的比较算法就是SameValueZero。

//综上所述，这个函数可以采用includes方法来实现

const array = [3, 2, 1, 0]
const values = [4, 2, -0]

function difference(array, values) {
    return array.filter((item) => {
        for (let i = 0; i < values.length; i++) {
            return !values.includes(item)  //不存在的保留
        }
    })
}

let test = difference(array, values)
console.log(test)
console.log(array)
console.log(values)