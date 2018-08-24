function capitalizeFirst (arr) {
    if (arr.length == 0) return [];
    arr[0] = arr[0][0].toUpperCase() + arr[0].slice(1);
    return arr.slice(0, 1).concat(capitalizeFirst(arr.slice(1)));
  }
  
  // capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']
  