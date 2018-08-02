function convertHashToArray(hash){
  const arr = [];
  for (let key in hash){
    arr.push([key, hash[key]]);
  }
  return arr.sort((a, b) => a[0] > b[0]);
}