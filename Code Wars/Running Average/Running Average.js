function runningAverage() {
    const avg = [];
    return num => avg.push(num) && +(avg.reduce((a, c) => a + c, 0)/avg.length).toFixed(2);
  }