function stringify(list) {
  if (list == null) return "null";
  let current = list;
  let str = "";
  
  while(current.next !== null){
    str = str + current.data + " -> " ;
    current = current.next;
  }
  str += current.data + " -> null";
  return str;
}