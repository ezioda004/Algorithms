const bubbleSort = arr => {
    const swap = (a, b, arr) => {
        let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length-i-1; j++){
            if (arr[j] > arr[j+1]) swap(j, j+1, arr);
        }
    }
    return console.log(arr);
}

bubbleSort(JSON.parse(process.argv[2]));



// Optimized version

/*
const bubbleSort = arr => {
    let noSwap = false;
    const swap = (a, b, arr) => {
        let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length-i-1; j++){
            if (arr[j] > arr[j+1]) swap(j, j+1, arr), noSwap = true;
        }
        if (noSwap) break;
    }
    return console.log(arr);
}
*/