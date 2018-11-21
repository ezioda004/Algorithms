function capitalsFirst(str){
  return str.split(" ").filter(w => /^[a-z]/i.test(w)).sort((a, b) => {
    a = a.charCodeAt(0), b = b.charCodeAt(0);
    if ((a >= 65 && a <= 90) && (b >= 65 && b <= 90)){
      return 0;
    }
    else if (a > 90 && b > 90){
      return 0;
    }
    else {
      return a - b;
    }
  
  }).join(' ');
}