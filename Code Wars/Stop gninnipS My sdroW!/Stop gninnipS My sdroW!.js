function spinWords(str){
    return str.split(' ').map(word => word.length >= 5 ? [...word].reverse().join(''): word).join(' ');
  }