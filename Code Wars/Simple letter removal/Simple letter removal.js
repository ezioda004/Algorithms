function solve(s, k){
    if (s.length <= k) return "";
    let finalStr = s;
    let firstChar = "a".charCodeAt(0);
    while (k > 0){
      s = finalStr;
      finalStr = "";
      for (let char of s){
        (k <= 0 || firstChar !== char.charCodeAt(0)) 
        ? finalStr += char
        : k--;
      }
      firstChar+=1;
    }
    return finalStr;
}