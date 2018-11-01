function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
    function getPrimeFactors(n) {
      const factors = new Set();
      
      //  Considering 2 as a special case
      while (n % 2 == 0) {
        n = n / 2;
        factors.add(2);
      }
      // Adding other factors to the set
      for (let i = 3; i <= Math.sqrt(n); i += 2) {
        while (n % i == 0) {
          factors.add(i);
          n = n / i;
        }
      }
  
      if (n > 2) factors.add(n);
      
      return [...factors];
    }
  
    function findConsecutiveNumbers() {
      let number = 0;
      let consecutive = 0;
  
      while (consecutive < targetConsecutive) {
        number++;
        if (getPrimeFactors(number).length >= targetNumPrimes) {
          consecutive++;
        } else {
          consecutive = 0;
        }
      }
      return number - targetConsecutive + 1;
    }
  
    return findConsecutiveNumbers();
  }