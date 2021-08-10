//创建一个切片数组，去除array前面的n个元素。（n默认值为1。）
function drop(array, n = 1) {
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


    return realArray.slice(n)
}

console.log(drop([1,2,3],1))
console.log(drop([1,2,3],2))
console.log(drop([1,2,3],5))
console.log(drop([1,2,3]))
console.log(drop())

console.log(drop("paper",1))
console.log(drop([],1))
console.log(drop(true,1))
console.log(drop({},1))
console.log(drop(function(){},1))

console.log(drop([1,2,3],""))
console.log(drop([1,2,3],"1"))
console.log(drop([1,2,3],"1,2"))
console.log(drop([1,2,3],{test:1}))
console.log(drop([1,2,3],{}))
console.log(drop([1,2,3],[]))
console.log(drop([1,2,3],[1]))
console.log(drop([1,2,3],[1,2]))