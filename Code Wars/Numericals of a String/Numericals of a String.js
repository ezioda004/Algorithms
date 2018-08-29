function numericals(s){
  return [...s].reduce((a, c) => (a[0][c] = a[0][c] ? (a[1]+= (+ ++a[0][c])) && a[0][c]: (a[1]+= 1) && 1) && a, [{}, ""])[1];
}