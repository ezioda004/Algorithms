function isBalanced(string) {
    //This question is stupid
    let balance = 0;
    string = string.replace(/[^\[\]\(\){}]/gi, "");
    while (/\(\)|\[\]|{}/g.test(string)){
     string = string.replace(/\(\)|\[\]|{}/g, rep => void balance++ || "");
    }
    return [string.length == 0, balance, string.length];
  
  }