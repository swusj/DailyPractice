//返回参数类型，注意，字符串开头为大写
function getType(x) {
    return Object.prototype.toString.call(x).replace(/^\[object (\S+)\]$/, '$1');
}

//判断参数是否为普通对象
function isObject(obj) {
    return getType(obj) === 'Object';
}

//判断参数是否为数组
function isArray(arr) {
    return getType(arr) === 'Array';
}

// TEST
console.log(getType({}));
console.log(getType([]));
console.log(getType(""));

console.log(isObject({}));
console.log(isObject([]));

console.log(isArray([]));
console.log(isArray({}));

module.exports = {
    getType,
    isObject,
    isArray
}
