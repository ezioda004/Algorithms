function capitalize(s){
    return [0, 1].reduce((a, c) => [...s].forEach((char, i) => a[c] += i+c & 1 ? char.toLowerCase(): char.toUpperCase()) || a, ["", ""]);
  }