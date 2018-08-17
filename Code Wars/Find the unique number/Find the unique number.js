function findUniq(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++){
    if (!obj[arr[i]]){
      obj[arr[i]] = 0;
    }
    obj[arr[i]]+=1;
    if (Object.keys(obj).length == 2 && Object.values(obj).some(val => val > 1)){
      let keys = Object.keys(obj);
      return obj[keys[0]] > 1 ? +keys[1] : +keys[0];
    }
  }
}