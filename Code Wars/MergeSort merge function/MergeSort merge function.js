function mergesorted(a, b) {
    let i = 0, j = 0, result = [];
    
    while(i < a.length && j < b.length){
      if (a[i] < b[j]) result.push(a[i++]);
      else result.push(b[j++]);
    }
    while (i < a.length) result.push(a[i++]);
    while (j < b.length)result.push(b[j++]);
    return result;
  }