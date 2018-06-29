function foldArray(array, runs)
{
    // METHOD 1: With 2 loops
  let arr = array.slice();
    for (let i = 0; i < runs; i++){
      let arr2 = arr.splice(0, arr.length/2);
      arr = arr.reverse().reduce((accum, curr, i) => {
      accum[i] = curr + (arr2[i] == undefined ? 0 : arr2[i]);
        return accum;
      }, []);
    }
  return arr;

  /*------------The End---------*/

  // METHOD 2: With recursion
  let finalArr = [];
  if (runs == 0){
    return array;
  }
  for (let i = 0; i < array.length/2; i++){
    array.length-i-1 == i 
      ? finalArr[i] = array[i]
      : finalArr[i] = array[i] + array[array.length-i-1];
  }
  return foldArray(finalArr, runs-1);
}