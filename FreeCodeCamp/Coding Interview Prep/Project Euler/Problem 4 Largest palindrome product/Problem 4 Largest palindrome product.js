function largestPalindromeProduct(n) {
    let max = +[...Array(n)].reduce((a, c) => a+=9,"");
    let min = (max+1)/10;
    let res = [];
    for (let i = max; i >= min; i--){
      for (let j =  max; j >= min; j--){
        let num = i*j;
        let numReverse = [...String(num)].reverse().join('');
        if (num == numReverse) {
          res.push(num);
          break;
        }
      }
    }
    return Math.max(...res);
  }
  
  console.log(largestPalindromeProduct(3));