function fibonacci(max) {
  if (max <= 2) return 0;
  const fib = [1, 2];
  let sumEven = fib[1];
  let num, i = 0;
  function sequence(n){
    if (n <= 1) return fib[n];
    else if (fib[n]) return fib[n];
    else {
      fib[n] = sequence(n-1) + sequence(n-2);
      if (fib[n]%2 == 0 && fib[n] < max) sumEven+=fib[n];
      return fib[n];
    }
  }

  do {
    num = sequence(3+i++);
  }
  while(num < max);
  return sumEven;
}