//创建一个新数组，包含原数组中所有的非假值元素。例如false, null,0, "", undefined,
// 和 NaN 都是被认为是“假值”。
const array = [0, 1, false, 2, '', 3, null, 0, "", undefined, NaN, "111",'111测试',[1,'test'],[]]
function compact(array) {
    return array.filter((item) => { 
        //!=发生强制类型转换，
        //1. 布尔值会转化为数字，
        //2. 字符串和数字比字符串也转化成数字 
        //3. 红宝书上鞋，null和undefined不会发生转换,所以要单独处理，null == undefined 且二者都!=0; 但为啥 null == 0?(测试出来的)
        return item != 0 && item != undefined && item   //最后这个条件是为了过滤NaN的同时，不过滤含有非数字的字符串
    })
}
let test = compact(array)
console.log(test)
