function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let node = new Node(data);
  if (index == 0){
    node.next = head;
    head = node;
    return head;
  }
  let prev = null;
  let curr = head;
  for (let i = 0; i < index; i++){
    prev = curr;
    curr = curr.next;
  }
  prev.next = node;
  node.next = curr;
  return head;
}