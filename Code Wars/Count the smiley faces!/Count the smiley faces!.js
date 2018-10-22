function countSmileys(arr) {
  return arr.filter(smiley => /^(:|;)(~|-){0,1}(\)|D)$/.test(smiley)).length;
}