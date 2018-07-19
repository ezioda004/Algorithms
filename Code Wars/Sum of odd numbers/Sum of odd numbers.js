//Method 1: Because I'm a moron

function rowSumOddNumbers(n) {
  return Array.from(Array(n).keys()).reduce((a, c) => (a.sum += (a.pattern += 2)) && a, { pattern: (x => (x * (x-1) + 1)-2)(n), sum: 0 }).sum;
}

//Method 2:

function rowSumOddNumbers(n){
  return n**3; 
}