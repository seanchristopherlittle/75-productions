const removeAt = (arr, index) => {
  // save the indexed value
  let removeVal = arr[index];
  //loop through array, values to the left
  for (let i = 0; i < arr.length; i--) {
    arr[i] = arr[i + 1];
  }
  //decrease length by one value
  arr.length = arr.length - 1;
  //log array
  console.log(arr);
  //return removed value
  return removeVal;
};
console.log(removeAt([1000, 3, 204, 77], 1));