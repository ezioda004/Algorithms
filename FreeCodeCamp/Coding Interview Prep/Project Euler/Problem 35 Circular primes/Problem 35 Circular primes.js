function rotations(n) {
    if (String(n).length == 1) return n;
    return String((n % 10) + Math.floor(n / 10));
  }
  
  function circularPrimes(n) {
    const primes = [];
    let count = 0;
  
    // Making primes array
    for (let i = 0; i < n; i++) {
      primes.push(i);
    }
    primes[1] = 0;
  
    // Getting upperbound
    const upperBound = Math.ceil(Math.sqrt(n));
  
    // Treating multiples of 2 as special cases
    for (let i = 4; i < n; i += 2) {
      primes[i] = 0;
    }
  
    // Setting other non-prime numbers to 0
    for (let i = 3; i < upperBound; i += 2) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = 0;
      }
    }
  
    // Iterating through the array
    for (let i = 2; i < n; i++) {
      if (primes[i]) {
        let num = String(primes[i]);
        let tmp = 1; // tmp variable to hold the no of rotations
        let curr = num;
        for (let x = rotations(curr); x != curr; x = rotations(x)) {
          // If the rotated value is 0 then its not a ciruclar prime, break the loop
          if (!primes[x]) {
            tmp = 0;
            break;
          }
          tmp++;
          primes[x] = 0;
        }
        count += tmp;
      }
    }
    return count;
  }
  
  