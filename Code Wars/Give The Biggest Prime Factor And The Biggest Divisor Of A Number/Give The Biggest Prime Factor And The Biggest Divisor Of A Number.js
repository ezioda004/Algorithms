function bigPrimefacDiv(n) {
    var maxPrimeFac, maxFac, firstTime = true;
    n = Math.abs(n);
    if (!(n % 1 == 0)) return "The number has a decimal part.";
    function largestPrimeFactor(number) {
      let num = 2, max = 1;
      while (num <= number){
        if (number % num == 0) {
          if (firstTime){
            maxFac = number/num;
            firstTime = false;
          }
          max = num;
          number = number/num;
        }
        else num++;
      }
        return max;
    }
    maxPrimeFac = largestPrimeFactor(n);
    if (maxPrimeFac == n) return [];
    return [maxPrimeFac, maxFac]; 
  }