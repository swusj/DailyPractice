// 获取数组 array 的第一个元素。
function head(array){
    if(typeof array === "string"){
        return array.split("")[0]
    }
    return array[0]
}

console.log(head([1,2,3]))
console.log(head([]))
console.log(head("123"))
console.log(head({}))
console.log(head(false))