function balancedNum(number)
{  
    let arr = (number+"").split("")
    let s1 = 0, s2 = 0;
    while (arr.length > 2){
      s1+= +arr.pop();
      s2+= +arr.shift();
    }
    return s1 == s2 ? "Balanced" : "Not Balanced";
}