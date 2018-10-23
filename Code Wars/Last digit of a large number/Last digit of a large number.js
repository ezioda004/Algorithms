var lastDigit = function(str1, str2){  
  const patterns = {
    0: [0],
    1: [1],
    2: [2, 4, 8, 6], 
    3: [3, 9, 7, 1], 
    4: [4, 6], 
    5: [5], 
    6: [6],
    7: [7, 9, 3, 1],
    8: [8, 4, 2, 6],
    9: [9, 1]
    }
  let num = str1.slice(-1);
  let pow = str2.slice(-3);
  let len = patterns[num].length
  let last = pow % len;
  if (str2.length == 1 && +pow == 0) return 1;
  return patterns[num][len === 1 ? 0: last === 0 ? len-1: last-1];
}