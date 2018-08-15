function parse(string) {
  let str = string.split(" -> ");
  let i = str.length - 2;
  let tmp = null;
  while (i >= 0){
    let node = new Node(+str[i], tmp);
    i--;
    tmp = node;
    }
  return tmp;
  }