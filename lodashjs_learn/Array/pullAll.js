// 这个方法类似_.pull，区别是这个方法接收一个要移除值的数组。
// 不同于_.difference, 这个方法会改变数组 array。
function pullAll(array, values) {
	for (let i = 0; i < array.length; i++) {
		if (values.includes(array[i])) {
			array.splice(i, 1);
			i--;
		}
	}
	return array;
}

var array = [1, 2, 3, 1, 2, 3];
pullAll(array, [2, 3]);
console.log(array);
