function peak(arr){
 let sumLeft = 0;
 let sumRight = arr.reduce((a, c) => a + c) - arr[0]
 for (let i = 1; i < arr.length-1; i++){
   sumLeft+= arr[i-1];
   sumRight -= arr[i];
   if (sumLeft == sumRight) return i;
 }
 return -1;
}