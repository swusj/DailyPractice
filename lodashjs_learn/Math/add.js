//两个数相加。
function add(augend, addend) {
	if (augend === undefined && addend === undefined) {
		return 0;
	}
	if (augend === undefined && addend !== undefined) {
		return addend;
	}
	if (augend !== undefined && addend === undefined) {
		return augend;
	}
	if (typeof augend === "string" || typeof addend === "string") {
		return String(augend) + String(addend);
	} else {
		return Number(augend) + Number(addend);
	}
}
// console.log(add(6, 4));
// console.log(add(6));
// console.log(add());
// console.log(add(1, "23"));

export default add;
