function validBraces(braces){
  const stack = [];
  const valid = ["()", "{}", "[]"];
  const pattern = ["(", "{", "["];
  
  for (let brace of braces){
    if (pattern.includes(brace)){
      stack.push(brace);
    }
    else {
      if (!valid.includes(stack.pop() + brace)){
        return false;
      }
    }
  }
  return stack.length == 0;
}