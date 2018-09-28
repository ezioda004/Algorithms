function lcm(...nums){
  if (nums.length == 1) return nums[0]
  let maxLCM = nums[0];
  for (let i = 0; i < nums.length-1; i++){
    maxLCM = (maxLCM*nums[i+1])/gcd(maxLCM, nums[i+1]); 
  }
  return maxLCM;
}
function gcd(a = 0, b = 0){
  if (b === 0) return a;
  return gcd(b, a%b);
}