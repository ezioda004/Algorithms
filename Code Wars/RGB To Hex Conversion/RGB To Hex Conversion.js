 //Method 1 without using .toString()
function rgb(...rgb){
   
    const hexValue = {10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F"};
    const hex = [];
    for(let color of rgb){
      let bin = "";
      color > 255 ? color = 255 : null;
      while (color > 0){
          color % 2 ? (bin = 1 + bin) : (bin = 0 + bin);
          color = Math.floor(color/2)
      }
      while (bin.length < 8){
        bin = "0" + bin;
      }
      let splitBin = [bin.slice(0, 4), bin.slice(4)];
      let eachHex = splitBin.map(val => val.split("").reduce((a, curr, i, arr) => a += (2**(arr.length-1-i) * curr),0)).reduce((accum, curr) => curr > 9 ? accum+=hexValue[curr] : accum+=curr,"");
      hex.push(eachHex);
    }
    return hex.join("");
    
  }

  //Method 2 using .toString()
  function rgb(...rgb){
    return rgb.map(val => val <= 0 ? "00" : (val > 255 ? 255 : val).toString(16).toUpperCase()).join("");
  }
  