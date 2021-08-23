// 这个方法返回首个提供的参数。
function identity(...values) {
    return values[0];
}

var object = { 'a': 1 };
console.log(identity(object) === object);
console.log(identity())
console.log(identity(1, 2, 3))

module.exports = identity