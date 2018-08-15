function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function push(head, data) {
    const node = new Node(data);
    if (head == null){
      head = node;
    }
    else {
      node.next = head;
    }
    return node;
  }
  
  function buildOneTwoThree() {
    return push(push(push(null, 3), 2), 1);
  }