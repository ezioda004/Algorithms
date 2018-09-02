function longestBouncyList(arr) {
    let max = [],
        tmp = [];
    const checkLongest = () => {
        if (tmp.length > max.length) {
            max = tmp;
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) tmp.push(arr[i]);
        else if (arr[i] == arr[i + 1]) {
            tmp.push(arr[i]);
            checkLongest();
            tmp = [];
        } else {
            if (tmp.length == 0) tmp.push(arr[i]);
            else {
                if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) tmp.push(arr[i]);
                else if (arr[i] < arr[i + 1] && arr[i] < arr[i - 1]) tmp.push(arr[i]);
                else {
                    tmp.push(arr[i]);
                    checkLongest();
                    tmp = [arr[i]];
                }
            }
        }
        checkLongest();
    }
    return max;
}