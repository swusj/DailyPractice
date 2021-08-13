//获取数组array中除了最后一个元素之外的所有元素（注：去除数组array中的最后一个元素）。

//注：不改变参数数组，返回的新数组

function initial(array){
    if(Array.isArray(array)){
        return array.slice(0,array.length-1)
    }else if(typeof array === "string"){
        let temp = array.split("")
        return temp.slice(0,array.length-1)
    }else{
        return []
    }
}

console.log(initial([1,2,3]))
console.log(initial("123"))
console.log(initial({}))