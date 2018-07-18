function countInversions( array ){
    // TODO: make this solution non-ugly
    let inversionsCount = 0;
    let sortedArray = array.slice().sort((a, b) => a - b);
    let originalArray = array.slice();
    while(JSON.stringify(sortedArray) !== JSON.stringify(originalArray)){
      for (let i = 0; i < originalArray.length; i++){
        if (originalArray[i] > originalArray[i+1]){
          let temp = originalArray[i];
          originalArray[i] = originalArray[i+1];
          originalArray[i+1] = temp;
          inversionsCount++;
        }
      }
    
    }
    return inversionsCount;
  }