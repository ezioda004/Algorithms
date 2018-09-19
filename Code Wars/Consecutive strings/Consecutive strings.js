function longestConsec(strarr, k) {
    if (k <= 0 || k > strarr.length) return "";
    let longest = "";
    for (let i = 0; i < strarr.length; i++){
      let curr = "";
      for (let j = 0; j < k && (i+j < strarr.length); j++){
        curr+=strarr[i+j];
      }
      if (curr.length > longest.length) longest = curr;
    }
    return longest;
}