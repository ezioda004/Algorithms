function add(a, b) {
  let i = 0;
  a = a.split("").reverse().join(""), b = b.split("").reverse().join("");
  let final = "";
  let rem = 0;
  while(i < a.length || i < b.length){
    let num = String(+(a[i] ? a[i] : 0) + +(b[i] ? b[i] : 0) + +rem);
    let f = num[num.length-1];
    rem = num.length == 1? 0 : num[0];
    final = f + final;
    i++;
  }
  return final = rem == 0 ? final : rem + final;
}