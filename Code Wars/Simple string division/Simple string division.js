function solve(str,k){
  let len = str.length-k;
  let max = 0;
  for(let i = 0; i < str.length; i++){
    let curr = str.slice(i, i+len);
    max = Math.max(max, curr);
  }
  return max;
}