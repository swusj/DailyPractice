//将数组拆分为二维数组
const array = ['a', 'b', 'c', 'd', 'e']
function chunk(array, size) {
    if(!Array.isArray(array)||size<=0){
        return undefined
    }
    let twoArray = []
    while (array.length > 0) {
        let temp = []
        for (i = 0; i < size && array.length > 0; i++) {
            temp.push(array.shift())
        }
        twoArray.push(temp)
    }
    return twoArray
}

let testArray = chunk(array, 2)
console.log(testArray)