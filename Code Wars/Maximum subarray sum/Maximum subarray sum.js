var maxSequence = function(arr){
  function subArray(arr, n){
    let max = 0;
    for (let i = 0; i < n; i++){
      max+= arr[i];
    }
    let curr = max;
    for (let i = n; i < arr.length; i++){
      curr = curr + arr[i] - arr[i - n];
      if (curr > max) max = curr;
    }
    return max;
  }
  let max = 0;
  for (let i = 1; i < arr.length; i++){
    let curr = subArray(arr, i);
    if (curr > max) max = curr;
  }
  return max;
  
}