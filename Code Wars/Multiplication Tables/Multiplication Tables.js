function multiplicationTable(row,col){
  return Array(row).fill(0).reduce((a, c, i) => a.push(Array.from(Array(col).keys()).map((val, j) => (j+1) * (i+1))) && a , [])
}