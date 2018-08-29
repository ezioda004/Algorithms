function merge(arr1, arr2) {
    let i = 0,
        j = 0;
    const final = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) final.push(arr1[i++]);
        else final.push(arr2[j++])
    }
    while (i < arr1.length) final.push(arr1[i++]);
    while (j < arr2.length) final.push(arr2[j++]);
    return final;
}

function mergeSort(arr) {
    if (arr.length == 1) return arr;

    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right);
}