
// Method 1 - Iterative
function fiboEvenSum(n) {
    let first = 1, second = 2, sum = 2, fibNum;
    if (n <= 1) return sum;
    for (let i = 2; i <= n; i++){
      fibNum = first + second;
      first = second;
      second = fibNum;
      if (fibNum%2 == 0) sum+=fibNum;
    }
    return sum;
  }
  
  // Method 2 - Recursive
  // <----Uncomment to run--->
  // function fiboEvenSum(n) {
  //   const fib = [1, 2];
  //   let sumEven = fib[1];
  //   function helper(n){
  //     if (n <= 1) return fib[n];
  //     else if (fib[n]) return fib[n];
  //     else {
  //       fib[n] = helper(n-1) + helper(n-2);
  //       if (fib[n]%2 == 0) sumEven+=fib[n];
  //       return fib[n];
  //     }
  //   }
  //   helper(n);
  //   return sumEven;
  // }
  
  fiboEvenSum(10);