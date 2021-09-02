import { constant } from "./constant.js";
// 调用 iteratee n 次，每次调用返回的结果存入到数组中。 iteratee 调用入1个参数： (index)。
function times(n, iteratee) {
	const res = [];
	for (let i = 0; i < n; i++) {
		res.push(iteratee ? iteratee(i) : i);
	}
	return res;
}

// console.log(times(3, String));
// console.log(times(3));
// console.log(times(4, constant(0)));

// var objects = times(2, constant({ a: 1 }));
// console.log(objects);
// console.log(objects[0] === objects[1]);
export { times };
