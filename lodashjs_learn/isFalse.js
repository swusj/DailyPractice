//判断参数是否为假值的函数，注：认为 [], {} 不为假值
function isFalse(x){
    return x === 0 || x === false || x === null || x === "" || x === undefined || Object.is(x,NaN)
}

console.log(isFalse(0))
console.log(isFalse(null))
console.log(isFalse(1))
console.log(isFalse("222"))
console.log(isFalse(NaN))
console.log(isFalse([]))
console.log(isFalse({}))

module.exports = isFalse