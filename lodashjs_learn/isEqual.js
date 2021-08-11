//粗糙的实现，比较的是值
function isEqual(a, b) {
    if (typeof a === "object" && typeof b === "object") {
        const a_keys = Object.keys(a);
        const b_keys = Object.keys(b);
        if (a_keys.length !== b_keys.length) {
            return false
        } else {
            for (let i = 0; i < a_keys.length; i++) {
                if (a[a_keys[i]] !== b[b_keys[i]]) {
                    return false
                }
            }
        }
        return true
    } else {
        return a === b
    }
}

module.exports = isEqual