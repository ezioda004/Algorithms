function deleteNth(arr, n) {
    let dic = {};
    let i = 0;
    while (i < arr.length) {
        !dic[arr[i]] ?
            dic[arr[i]] = 1 :
            (dic[arr[i]] == n) ?
            arr.splice(i--, 1) :
            dic[arr[i]]++;
        i++;
    }
    return arr;
}