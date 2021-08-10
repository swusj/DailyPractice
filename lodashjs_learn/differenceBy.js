function differenceBy(array, ...args) {  // ...xxx为剩余参数用法，允许将一个不定数量的参数表示为一个数组
    let temp = []
    let iteratee = null
    switch (typeof args[1]){  //迭代器暂时只考虑这种类型，不懂迭代器是数组或对象的话是啥情况，，，
        case 'function':
            iteratee = args.pop()
            break;
        case 'string':
            let temp = args.pop()
            iteratee = function (value){
                return value[temp]
            }
            break;
        default:
            iteratee = function (value) {
                return value
            }
            break;
    }
    temp = args.pop().map((item) => iteratee(item))   //temp存储迭代后的values数组
    return array.filter((item) => !temp.includes(iteratee(item)))  //过滤，array的每一项也要迭代哈！
}

let test = differenceBy([3.1, 2.2, 1.3], [4.4, 2.5], Math.floor)
console.log(test) //[3.1, 1.3]

let test2 = differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x')
console.log(test2)




