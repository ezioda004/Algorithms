const binarySearch = (arr, val) => {
    let left = 0;
    let right = arr.length-1;
    while (left <= right){
        let middle = Math.floor((left + right)/2);
        if (arr[middle] == val)  return console.log(middle);
        else if (val < arr[middle]) right = right - 1;
        else left = left + 1;
    }
    return console.log(-1);

};
binarySearch(JSON.parse(process.argv[2]), +process.argv[3]);