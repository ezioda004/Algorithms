const selectionSort = arr => {
    const swap = (a, b, arr) => {
        let tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    for (let i = 0; i < arr.length; i++) {
        let smallestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[smallestIndex] > arr[j]) smallestIndex = j;
        }
        swap(i, smallestIndex, arr);
    }
    return console.log(arr);
}

selectionSort(JSON.parse(process.argv[2]));