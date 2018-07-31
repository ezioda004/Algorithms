function elementsSum(arr,d){
  return arr.reduce((a, c, i) => a += (c[arr.length-1-i] == undefined ? d ? d : 0 : c[arr.length-1-i]), 0); 
}