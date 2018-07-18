function digits(num){
    return [...String(num)].reduce((a, c, i, l) => l.slice(i+1).forEach(v => a.push(+v + +c)) || a, []);
  }