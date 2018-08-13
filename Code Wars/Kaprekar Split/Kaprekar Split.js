function kaprekarSplit(n){
    let str = (""+n**2)
    let x = [str.slice(0, Math.floor(str.length/2)), +str.slice(Math.floor(str.length/2))];
    return (+x[0] + x[1] == n) ? x[0].length : (+x[0].replace(/0+$/gi, "") + x[1]) == n ? x[0].replace(/0+$/gi, "").length : -1;
  }