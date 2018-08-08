function hourglassSum(arr) {
    let hourGlass = [];
    function pattern(i, j){
        let total = 0;
        total = arr[i][j] + arr[i][j+1] + arr[i][j+2] + arr[i+1][j+1] + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
        return total;
    }
    
    for (let i = 0; i < arr.length - 2; i++){
        for (let j = 0; j < arr[i].length - 2; j++){
            hourGlass.push(pattern(i, j));
        }
    }
    return Math.max(...hourGlass);
}