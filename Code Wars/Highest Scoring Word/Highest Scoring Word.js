function high(x){
    return x.split(" ").reduce((highestYet, word) => {
      const wordChar = word.split("").reduce((total, char) =>  total += (char.charCodeAt(0) - 96), 0);
      if (wordChar > highestYet.value) {
        highestYet.bigWord = word;
        highestYet.value = wordChar;
      }
      return highestYet;
    }, {bigWord: "", value: 0}).bigWord;
  }