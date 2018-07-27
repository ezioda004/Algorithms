function SeriesSum(n)
{
  // Happy Coding ^_^
  if (n === 0) return "0.00";
   function sum(n){
    if (n === 1) return 1;
    return 1/(n*2 + (n-2)) + sum(n-1)
    }
  return sum(n).toFixed(2);
}