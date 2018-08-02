function array_diff(a, b) {

//Method 1 declarative way

  return a.filter(elem => !b.includes(elem));

//Method 2 imperative way

  const res = [];
  
  for (let i = 0; i < a.length; i++){
    for (var j = 0; j < b.length; j++){
      if (a[i] === b[j]) {
        break;
      }
    }
    if (j === b.length){
        res.push(a[i]);
      }
  }
  return res;
}