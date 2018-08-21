//This solution is far better than sorting every word each iteration, all top solutions are bad!!!
function anagrams(word, words) {
  let dic = {};
  let finalArr = [];
  for (let char of word){
    char in dic ? dic[char]++:dic[char] = 1; 
  }
  for (let str of words){
    if (str.length !== word.length) continue;
    let dicCopy = JSON.parse(JSON.stringify(dic));
    
    for (let char of str){
      if (char in dicCopy){
        dicCopy[char]--;
        if (dicCopy[char] == 0){
          delete dicCopy[char]
        }
      }
      else {
        break;
      }
    }
    !Object.keys(dicCopy).length && finalArr.push(str); 
    
  }
  return finalArr
}

//Perfomance test with this

// let t1 = performance.now()
// anagrams('abba', ['aabb', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd','abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'abcdsasadsadasdasadd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', 'aabb', 'abcd', 'bbaa', 'dada', ])
// let t2 = performance.now();
// console.log(t2 - t1)