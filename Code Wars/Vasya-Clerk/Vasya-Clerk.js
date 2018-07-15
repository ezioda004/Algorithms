function tickets(peopleInLine){
  // ...
  let billsLeft = {25: 0, 50: 0, 100: 0};
  
  for (let i = 0; i < peopleInLine.length; i++){
    if (peopleInLine[i] == 25){
      billsLeft[25]+= 1;
    }
    else if (peopleInLine[i] == 50){
      billsLeft[25]-= 1;
      billsLeft[50]+= 1;
    }
    else if (peopleInLine[i] == 100){
      if (billsLeft[50] >= 1 && billsLeft[25] >=1){
        billsLeft[50] -= 1;
        billsLeft[25] -= 1;
      }
      else if (billsLeft[25] >= 3){
        billsLeft[25] -= 3;
      }
      else {
        return "NO";
      }
    }
    if (Object.values(billsLeft).some(val => val < 0)){
      return "NO";
    }
  }
  return "YES";
  
}