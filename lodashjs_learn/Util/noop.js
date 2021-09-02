import { times } from "./times.js";
// 这个方法返回 undefined
function noop() {
	return undefined;
}

// console.log(times(2, noop));

export { noop };
