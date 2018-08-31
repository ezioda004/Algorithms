function chained(functions) {
    return val => {
        for (let func of functions) {
            val = func(val);
        }
        return val;
    }
}