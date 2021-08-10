//这个方法类似_.difference ，除了它接受一个 iteratee （注：迭代器）， 调用array 和 values 中的每个元素以产生比较的标准。 
//结果值是从第一数组中选择。iteratee 会调用一个参数：(value)。（注：首先使用迭代器分别迭代array 和 values中的每个元素，返回的值作为比较值）。

//Note: 不像_.pullAllBy，这个方法会返回一个新数组。

function differenceBy(array, ...args) {  // ...xxx为剩余参数用法，允许将一个不定数量的参数表示为一个数组
    let values=[]  //存储迭代前的values数组
    let temp = []  //temp存储迭代后的values数组
    let iteratee = null
    values = values.concat(args[0])
    switch (typeof args[1]){  //迭代器暂时只考虑这种类型，不懂迭代器是数组或对象的话是啥情况，，，
        case 'function': 
            iteratee = args.pop()
            break
        case 'string':
            let temp = args.pop()
            iteratee = function (value){
                return value[temp]
            }
            break
        //如果是数组或对象，就直接将其合并到values里
        case 'object':
            if(args[1] instanceof Array){
                values = values.concat(args[1])
            }
            iteratee = function (value) {
                return value
            }
            break
        default:
            iteratee = function (value) {
                return value
            }
            break;
    }
    temp = values.map((item) => iteratee(item))   
    return array.filter((item) => !temp.includes(iteratee(item)))  //过滤，array的每一项也要迭代哈！
}

let test = differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)
console.log(test) //[3.1, 1.3]

let test2 = differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')
console.log(test2)

console.log(differenceBy([{ 'x': 2 }, { 'x': 1 },9,"11",function(){},true], [{ 'x': 1 }], [1,2,9,{'x':2},'11',function(){},true]))

console.log(differenceBy([{ 'x': 2 }, { 'x': 1 },9,"11",function(){},true], [{ 'x': 1 }], {"x":1}))



