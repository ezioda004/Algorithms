function bubblesortOnce(a) {
  let b = [...a];
  for (let i = 0; i < b.length-1; i++){
    if (b[i] > b[i+1]) [b[i], b[i+1]] = [b[i+1], b[i]];
  }
  return b;
}