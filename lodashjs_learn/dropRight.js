// 创建一个切片数组，去除array尾部的n个元素。（n默认值为1。）
function dropRight(array, n = 1) {
    let realArray = []

    switch (Object.prototype.toString.call(array).replace(/^\[object (\S+)\]$/, '$1')) {
        case "Array":
            realArray = array
            break
        case "String":
            realArray = array.split("")
            break
        default:
            return []
    }

    n = Number(n)    


    return realArray.slice(0,array.length-n)
}

console.log(dropRight([1,2,3],1))
console.log(dropRight([1,2,3],2))
console.log(dropRight([1,2,3],5))
console.log(dropRight([1,2,3]))
console.log(dropRight())

console.log(dropRight("paper",1))
console.log(dropRight([],1))
console.log(dropRight(true,1))
console.log(dropRight({},1))
console.log(dropRight(function(){},1))

console.log(dropRight([1,2,3],""))
console.log(dropRight([1,2,3],"1"))
console.log(dropRight([1,2,3],"1,2"))
console.log(dropRight([1,2,3],{test:1}))
console.log(dropRight([1,2,3],{}))
console.log(dropRight([1,2,3],[]))
console.log(dropRight([1,2,3],[1]))
console.log(dropRight([1,2,3],[1,2]))