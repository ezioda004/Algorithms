function sumSquareDifference(n) {
  const sumOfN = (n*(n+1))/2;
  const sumOfNSquare = (n*(n+1)*(2*n+1))/6;
  return sumOfN**2 - sumOfNSquare;
}

sumSquareDifference(100);