// Complete the minimumBribes function below.
let result = [];
function minimumBribes(q) {
  let steps = 0;
  const { length } = q;
  for (let i = 0; i < length; i++) {
    if (q[i] - (i + 1) > 2) {
      result.push("Too chaotic");
      return 1;
    }
  }
  //Bubble sort
  for (let j = 0; j < length - 1; j++) {
    if (q[j] > q[j + 1]) {
      let temp = q[j];
      q[j] = q[j + 1];
      q[j + 1] = temp;
      steps++;
      j -= 2;
    }
  }

  result.push(+steps);
}

function main() {
  const t = parseInt(readLine(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine(), 10);

    const q = readLine()
      .split(" ")
      .map(qTemp => parseInt(qTemp, 10));

    minimumBribes(q);
  }
  console.log(result.join("\n"));
}
