// 根据索引 indexes，移除array中对应的元素，并返回被移除元素的数组。
// Note: 和_.at不同, 这个方法会改变数组 array。
function pullAt(array, ...indexes) {
	const res = [];
	let delNum = 0;
	indexes.forEach((index) => {
		index = index - delNum;
		// 如果索引值在数组范围内
		if (index <= array.length - 1 && index >= 0) {
			res.push(...array.splice(index, 1));
			delNum++;
		} else {
			// 如果不在就是undefined
			res.push(undefined);
		}
	});
	return res;
}

var array = [5, 10, 15, 20];
var evens = pullAt(array, 1, 3);

var array1 = [5, 10, 15, 20];
var evens1 = pullAt(array1, 1, 5);

console.log(array);
console.log(evens);

console.log(array1);
console.log(evens1);
