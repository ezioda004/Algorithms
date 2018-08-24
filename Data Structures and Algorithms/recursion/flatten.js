function flatten(arr){
      return arr.reduce((accum, curr) => Array.isArray(curr) ? accum.concat(flatten(curr)): accum.push(curr) && accum, []);
  }
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3