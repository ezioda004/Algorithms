function productFib(prod){
  let fib = [0, 1], found = false;
  function fibonacci(num){
    if (num <= 0) return fib[0];
    if (num == 1) return fib[1];
    else if (fib[num]) return fib[num];
    else {
      return fib[num] = fibonacci(num-1) + fibonacci(num-2);
    }
  }
  let num = 2, prev = 1;
  while (!found){
    let curr = fibonacci(num);
    let res = curr * prev;
    if (res < prod){
      prev = curr;
      num++;
    }
    else if (curr * prev == prod) return [prev, curr, true]
    else return [prev, curr, false];
  }
}