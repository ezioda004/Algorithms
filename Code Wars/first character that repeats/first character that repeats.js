function firstDup(s) {
  let hashTable = {};
  let smallest = Infinity;
  for (let i = 0; i < s.length; i++) {
    if (!hashTable.hasOwnProperty([s[i]])) {
      hashTable[s[i]] = i;
    } else {
      let index =
        typeof hashTable[s[i]] === "object"
          ? hashTable[s[i]].i
          : hashTable[s[i]];
      hashTable[s[i]] = { i: index };
    }
  }
  let i = Object.keys(hashTable).reduce((a, c) => {
    if (typeof hashTable[c] == "object") {
      if (hashTable[c].i < a) {
        return (a = hashTable[c].i);
      }
    }
    return a;
  }, Infinity);
  return s[i];
}
