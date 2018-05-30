function getFinalOpenedDoors (numDoors) {
  // Good luck!
  let doors = Array(100).fill(0);
  for (let i = 1; i <= numDoors; i++){
    doors = doors.map((val, index) => (index+1) % i == 0 ? !val : !!val);
  }
  return doors.reduce((accum, curr, i) => curr === true ? accum.push(i) && accum : accum ,[]);
}