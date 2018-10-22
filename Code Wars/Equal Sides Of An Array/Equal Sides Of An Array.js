function findEvenIndex(arr)
{
  let left = 0, right = 0;
  for (let i = 1; i < arr.length; i++){
    right += arr[i];
  }
  for (let i = 1; i < arr.length; i++){
    left += arr[i-1];
    right -= arr[i];
    if (left === right) return i;
  }
  return -1;
}