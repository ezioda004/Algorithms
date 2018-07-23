function isPrime(num) {
    //Method 1 by generating a primse number list and checking 
    if (num < 2) return false;
    let numSeries = Array.from(Array(num+1).keys())
    for (let i = 2; i <= num; i++){
      for (let j = (i*2); j <= num; j+=i){
        numSeries[j] = 0;
      }
    }
    return numSeries.includes(num);
  }
  //Method 2 by checking num % by every number leaves a remainer 

  function isPrime(num) {
    if (num < 2) return false;
  
    for (let i = 2; i <= num/2; i++){
        if (num % i == 0) return false;
    }
    return true;
  }