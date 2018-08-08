function rotLeft(a, d) {
    let len = a.length;
    d = d % len;
    let result = [], i = 0;
    while (i < len){
        if ((d + i) >= len){
            result.push(a[(d + i) - len]);
        }
        else {
            result.push(a[d+i]);
        }
        i++
    }
    return result;
}