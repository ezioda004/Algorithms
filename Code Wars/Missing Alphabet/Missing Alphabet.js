function insertMissingLetters (str){

//your code here
  let regex = new RegExp("[" + str.toUpperCase() + "]", "g");
  let nonDuplicateArray = [];
  return [...str].reduce((acum, cur, i, arr) => {
    let firstChar = cur.toUpperCase().charCodeAt(0);
    let lastCharAt = 90;
    let chunkOfChar = cur;
    if (!nonDuplicateArray.includes(cur)){
      for (let i = firstChar + 1; i <= lastCharAt; i++){
        chunkOfChar += String.fromCharCode(i);
      }
        nonDuplicateArray.push(cur);
    }
    return acum+=chunkOfChar;
  }, "").replace(regex, "");
}