function removeDuplicateWords (s) {
  s = s.split(" ");
  let dic = {};
  let final = [];
  for (let word of s){
    if (!dic[word]){
      dic[word] = 1;
      final.push(word);
    }
  }
  return final.join(' ');
}