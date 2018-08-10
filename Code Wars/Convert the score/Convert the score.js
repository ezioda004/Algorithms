function scoreboard(string) {
  let arr = [];
  const num = {"nil": 0, "one" : 1, "two" : 2, "three" : 3, "four" : 4, "five" : 5, "six" : 6, "seven" : 7, "eight" : 8, "nine" : 9};
  return string.split(" ").forEach((str) => (str in num) && arr.push(num[str])) || arr;
}