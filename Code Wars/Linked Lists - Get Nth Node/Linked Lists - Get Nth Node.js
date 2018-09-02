function Node(data) {
    this.data = data;
    this.next = null;
}

function getNth(node, index) {
    if (index < 0 || !node) throw new Error();
    let curr = node;
    for (let i = 0; i < index; i++) {
        if (!curr.next) throw new Error();
        curr = curr.next;
    }
    return curr;
}


//Recursion way

function getNth(node, index) {
    if (index < 0 || !node) throw new Error();
    let curr = node;
    for (let i = 0; i < index; i++) {
        if (!curr.next) throw new Error();
        curr = curr.next;
    }
    return curr;
}

function getNth(node, index){
    if (!node || index < 0) throw new Error();
    return index == 0 ? node : getNth(node.next, index-1); 
}