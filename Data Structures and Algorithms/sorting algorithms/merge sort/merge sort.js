const merge = (arr1, arr2) => {
  let i = 0,
    j = 0,
    finalArr = [];

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) finalArr.push(arr1[i++]);
    else finalArr.push(arr2[j++]);
  }
  while (i < arr1.length) {
    finalArr.push(arr1[i++]);
  }
  while (j < arr2.length) {
    finalArr.push(arr2[j++]);
  }
  return finalArr;
};

const mergeSort = arr => {
  if (arr.length == 1) return arr;

  let left = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
  let right = mergeSort(arr.slice(Math.floor(arr.length/2)));

  return merge(left, right);

}

let result = mergeSort(JSON.parse(process.argv[2]));
console.log(result);