function isInteresting(number, awesomePhrases) {
  // Go to town!
  if (String(number).length < 3){
    if ((String(number+1).length == 3) || (String(number+2).length == 3)){
      return 1;
    }
    return 0;
  }
  function followByZero(num){
    return /^\d0{2,}$/g.test(+num);
  }
  function sameNumber(num){
    return new Set(String(num).split("")).size == 1;
  }
  function incrementingSeq(num){
    let str = String(num);
    let newStr = str.split("")
      .sort((a, b) => a != 0 & b != 0 ? a-b : b-a)
      .join("");
    if (str === newStr){
       return str[str.length-1] != 0 
         ? (str[str.length-1] - str[0] === str.length - 1) 
         : (str[str.length-2] == 9) && str[str.length-2] - str[0] === str.length-2;
    }
  }
  function decrementingSeq(num){
    let str = String(num);
    let newStr = str.split("").sort((a, b) => b - a).join("");
    if (str === newStr && str.length == new Set(newStr).size){
       return str[0] - str[str.length-1] === str.length - 1;
    }
    else {
      return false;
    }
  }
  function palindrome(num){
    let pal = String(num).split("").reverse().join("");
    return pal === String(num);
  }
  function phraseMatch(num, arr){
    return arr.includes(num);
  }
  let result = number => followByZero(number) || sameNumber(number) || incrementingSeq(number)
    || decrementingSeq(number) || palindrome(number) || phraseMatch(number, awesomePhrases);
    let res1, res2;
    let res0 = result(number);
    if (res0 == false){
      res1 = result(number+1);
      res2 = result(number+2);
    }
    
    if (res0){
      return 2;
    }
    else if (res1 || res2){
      return 1;
    }
    else {
      return 0;
    }
}