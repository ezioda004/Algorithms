function largestRectangle(h) {
    let largest = 0;
    let curr = 0;
    for (let i = 0; i < h.length; i++){
        curr = 1;
        for (let j = i+1; j < h.length; j++){
            if (h[j] < h[i]){
                break;
            }
            curr++;
        }
        for (let k = i-1; k >= 0; k--){
            if (h[k] < h[i]){
                break;
            }
            curr++;
        }
        let area = h[i] * curr;
        if (area > largest){
            largest = area;
        }
        curr = 0;
    }
    return largest;

}