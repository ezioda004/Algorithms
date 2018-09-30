class MinHeap {
  constructor() {
    this.val = [];
  }
  push(val) {
    this.val.push(val);
    this.bubbleUp();
    return val;
  }
  bubbleUp() {
    let i = this.val.length - 1;
    let el = this.val[i];
    while (true) {
      let parent = Math.floor((i - 1) / 2);
      if (this.val[parent] > el) {
        [this.val[i], this.val[parent]] = [this.val[parent], this.val[i]];
        i = parent;
      } 
      else break;
    }
  }
  pop() {
    let remove = this.val[0];
    let last = this.val.pop();
    if (this.val.length == 0) return remove;
    this.val[0] = last;
    this.bubbleDown();
    return remove;
  }
  bubbleDown() {
    let i = 0;
    let el = this.val[0];
    while (true) {
      let c1 = 2 * i + 1;
      let c2 = 2 * i + 2;
      let min = this.val[c1] > this.val[c2] ? c2 : c1;
      if (this.val[min] < el) {
        [this.val[i], this.val[min]] = [this.val[min], this.val[i]];
        i = min;
      } 
      else break;
    }
  }
}
