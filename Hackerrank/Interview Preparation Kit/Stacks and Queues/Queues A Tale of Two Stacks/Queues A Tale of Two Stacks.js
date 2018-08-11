function processData(input) {
  //Enter your code here
  input = input.split("\n").slice(1);
  class Queue {
    constructor() {
      this.count = 0;
      this.items = {};
      this.lowestCount = 0;
    }
    put(el) {
      this.items[this.count] = el;
      this.count++;
    }
    pop() {
      if (this.count - this.lowestCount == 0) return;
      delete this.items[this.lowestCount];
      this.lowestCount++;
    }
    peek() {
      console.log(this.items[this.lowestCount]);
    }
  }

  const queue = new Queue();
  for (let i of input) {
    if (i[0] == 1) {
      queue.put(i.split(" ")[1]);
    } else if (i == 2) {
      queue.pop();
    } else if (i == 3) {
      queue.peek();
    }
  }
}
