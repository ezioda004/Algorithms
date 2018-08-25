function inArray(array1,array2){
  return array2.reduce((a, c) => !array1.forEach(val => c.includes(val) && a.indexOf(val) == -1 ? a.push(val) : null) && a, []).sort();
}