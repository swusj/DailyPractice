// // 调用 iteratee 遍历 collection(集合) 中的每个元素， iteratee 调用3个参数： (value, index|key, collection)。
// // 如果迭代函数（iteratee）显式的返回 false ，迭代会提前退出。

// import { isObject } from "../myType";

// // 简单测试下发现不会遍历继承来的属性
// function forEach(collection, iteratee) {
//     if(isObject(collection)){
//         const keys = Object.keys(collection)
//         iteratee()
//     }
//     collection.forEach(iteratee)
// 	return collection;
// }
// forEach([1, 2], function (value) {
// 	console.log(value);
// });

// forEach({ a: 1, b: 2 }, function (value, key) {
// 	console.log(key);
// });
