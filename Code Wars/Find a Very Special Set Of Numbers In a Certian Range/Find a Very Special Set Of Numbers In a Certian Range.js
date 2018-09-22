function findUs(n1, n2, k, factors, digits) {
    let range = n1 + n2*k;
    let min = factors.reduce((a, c) => a * c);
    let i = n1 > min ? n1 % min == 0 ? n1 : n1 - n1 % min + min : min;
    let res = [];
    function check(i){
      i = [...String(i)].map(n => +n);
      return digits.every(num => i.includes(num))
    }
    while (i <= range){
      if (check(i)) res.push(i);
      i+=min;
    }
    return res;
}