function battle(x, y) {
  const tVal = str => [...str].reduce((a, c) => a+=(c.charCodeAt(0) - 64), 0);
  return tVal(x) > tVal(y) ? x : tVal(x) < tVal(y) ? y : "Tie!"; 
}