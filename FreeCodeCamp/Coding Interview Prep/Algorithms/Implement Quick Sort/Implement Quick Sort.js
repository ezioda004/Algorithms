function partition(arr, left = 0, right = arr.length-1){
    let shift = left;
    for (let i = left+1; i <= right; i++){
        if (arr[i] < arr[left]){
            let tmp = arr[i];
            arr[i] = arr[++shift];
            arr[shift] = tmp;
        }
    }
    let tmp = arr[left];
    arr[left] = arr[shift];
    arr[shift] = tmp;
    return shift;
}
function quickSort(arr, left = 0, right = arr.length-1){
    if (left < right){
        let partIndx = partition(arr, left, right);
        quickSort(arr, left, partIndx-1);
        quickSort(arr, partIndx+1, right);
    }
    return arr;
}