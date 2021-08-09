function shallowCopy(array) {  //数组浅拷贝
    var target = []
    for (let i = 0; i < array.length; i++) {
        target[i] = array[i]
    }
    return target
}


//concat整体来说是浅拷贝的
let array = [1];
function concat(array) {
    let i = 1
    let newArray = shallowCopy(array)
    while (i < arguments.length) {
        if (Array.isArray(arguments[i])) {  //如果参数是数组，就添加数组中的第一层元素
            let temp = shallowCopy(arguments[i])  
            for (let j = 0; j < (temp.length); j++) {
                newArray.push(temp[j])
            }
            i++
        } else {
            newArray.push(arguments[i++])
        }

    }
    return newArray
}

let test = concat(array, 2, [3], [[4]])
console.log(test) //[ 1, 2, 3, [ 4 ] ]
console.log(array) //[ 1 ]