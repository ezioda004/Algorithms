function indexEqualsValue(a) {
    if (a[0] > 0) return -1;
    if (a.length == 1) return a[0];
    let left = 0
    let right = a.length-1;
    let arr = [];
    while (left < right){
      let middle = Math.floor((left + right)/2);
      if (middle == a[middle]){
        arr.push(middle)
      }
      if (middle <= a[middle]){
        if (middle-1 == a[middle-1]) arr.push(middle-1)
        right = middle - 1;
      }
      else {
       if ((middle+1) == a[middle+1]) arr.push(middle+1)
        left = middle + 1;
      }
    }
    return arr.length == 0 ? -1 : Math.min(...arr);
  }