//粗糙的实现，比较的是值
function isEqual(a, b) {
    if (typeof a === "object" && typeof b === "object") {
        const a_keys = Object.keys(a);
        const b_keys = Object.keys(b);
        if (a_keys.length !== b_keys.length) {
            return false
        } else {
            for (let i = 0; i < a_keys.length; i++) {
                if (a[a_keys[i]] !== b[b_keys[i]]) {
                    return false
                }
            }
        }
        return true
    } else {
        return a === b
    }
}

// 这个方法类似_.difference ，除了它接受一个 comparator （注：比较器），它调用比较array，values中的元素。 
// 结果值是从第一数组中选择。comparator 调用参数有两个：(arrVal, othVal)。

function differenceWith(array, ...args) {
    let comparator
    if (args.length === 1 || args[1] === [] || args[1] === "" || args[1] === '' || args[1] === null || args[1] === undefined || Object.is(args[1], NaN)) {
        comparator = isEqual
    } else if (typeof args[1] === "function") {
        comparator = args[1]
    } else {
        return false
    }

    return array.filter((arrItem) => {
        return args[0].some((valItem) => {  //是与values中的每一项都要进行comparator处理
            return comparator(arrItem, valItem)
        })
    })

}


let objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], isEqual))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }]))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], ""))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], ''))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], NaN))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], null))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], undefined))
console.log(differenceWith([1, 2, 4], [1, 4, 5], isEqual))

console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], {}))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], 1))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], []))
console.log(differenceWith(objects, [{ 'x': 1, 'y': 2 }], "11"))