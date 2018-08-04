function digPow(n, p){
    let final = [...String(n)].reduce((a, c, i) => a += Math.pow(c, p+i), 0);
    return final/n % 1 ? -1 : final/n;
  }