function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  return head ? 1 + length(head.next) : 0;
}

function count(head, data) {
  if (head == null) return 0;
  let c = 0;
  let current = head;
  while (current !== null){
    if (data == current.data) c++;
    current = current.next;
  }
  return c;
}