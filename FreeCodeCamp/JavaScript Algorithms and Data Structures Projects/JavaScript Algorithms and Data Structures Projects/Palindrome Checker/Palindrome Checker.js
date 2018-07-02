function palindrome(str) {
    // Good luck!
    let toCheckStr;
    toCheckStr = str.toLowerCase().replace(/[\W_]/gi, "");
    return toCheckStr === toCheckStr.split("").reverse().join("");
  }
  
  
  palindrome("eye");