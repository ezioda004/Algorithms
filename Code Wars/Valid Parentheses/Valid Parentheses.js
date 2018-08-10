function validParentheses(parens){
    //Using stack data structure
    const stack = [];
    for (let p of parens){
      if (p == "("){
        stack.push("(");
      }
      else {
        if (!stack.length) return false;
        stack.pop();
      }
    }
    return stack.length === 0;
  }