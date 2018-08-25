function flatten(...arr){
  return arr.reduce((a, c) => Array.isArray(c)? a.concat(flatten(...c)): a.push(c) && a, []);
}