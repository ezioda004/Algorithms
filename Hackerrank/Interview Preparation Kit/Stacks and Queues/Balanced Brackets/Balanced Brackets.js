function isBalanced(s) {
    const stack = [];
    const pattern = ["{", "[", "("];
    const toMatch = ["{}", "[]", "()"];
    for (let i = 0; i < s.length; i++){
        if (pattern.includes(s[i])){
            stack.push(s[i])
        }
        else {
            let seq = stack.pop() + s[i];
            if (!toMatch.includes(seq)){
                return "NO";
            }
        }
    }
    return stack.length === 0 ? "YES" : "NO";

}