function beggars(values, n){
  if (!n) return [];
  const arr = Array(n).fill(0);
  let index = 0;
  for (let i = 0; i < values.length; i++){
    arr[index] += values[i];
    if (index == arr.length - 1){
      index = 0;
    }
    else {
      index++;
    }
  }
  return arr;
}