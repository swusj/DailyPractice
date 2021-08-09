//将数组拆分为二维数组
//哎呀这样不好，改变了原数组了
const array = ['a', 'b', 'c', 'd', 'e']
function chunk(array, size) {
    if(!Array.isArray(array)||size<=0){
        return undefined
    }
    let twoArray = []
    let j = 0
    while (j< array.length) {
        let temp = []
        for (i = 0; i < size && j<array.length; i++) {
            temp.push(array[j])
            j++
        }
        twoArray.push(temp)
    }
    return twoArray
}

let testArray = chunk(array, 2)
console.log(testArray)