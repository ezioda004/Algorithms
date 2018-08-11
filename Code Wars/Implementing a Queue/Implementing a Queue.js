class Queue {
  constructor(){
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }
  enqueue(item){
    this.items[this.count] = item;
    this.count++;
  }
  dequeue(){
    if (this.size() == 0) return;
    const remove = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return remove;
  }
  size(){
    return this.count - this.lowestCount;
  }
}