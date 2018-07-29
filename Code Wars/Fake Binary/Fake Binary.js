function fakeBin(x){
  return [...x].map(y => y < 5 ? 0 : 1).join("");
}