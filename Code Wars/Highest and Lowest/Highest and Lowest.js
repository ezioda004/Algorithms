//Method1 => ES6 way
const highAndLow = numbers => Math.max(...numbers.split(" ")) + " " + Math.min(...numbers.split(" "));

//Method2 => With a loop

function highAndLow(numbers){
  // ...
  let max = -Infinity;
  let min = Infinity;
  
  for (let num of numbers.split(" ")){
    if (+num > +max){
      max = num;
    }
    if (+num < +min){
      min = num;
    }
  }
  return max + " " + min;
}