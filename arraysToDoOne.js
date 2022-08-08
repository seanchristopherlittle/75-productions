//PUSH FRONT
const pushFront = (arr, val) => {
  for (let i = arr.length; i >= 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr;
};
console.log(pushFront([5, 7, 2, 3], 8));

//POP FRONT
const popFront = (arr) => {
  // save the first value
  let firstVal = arr[0];
  //loop through array, values to the left
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  //decrease length by one value
  arr.length = arr.length - 1;
  //log array
  console.log(arr);
  //return removed value
  return firstVal;
};
console.log(popFront([0, 5, 10, 15]));

//INSERT AT
const insertAt = (arr, index, val) => {
  //loop through array, shift values to right until get to the index
  for (let i = arr.length; i >= index; i--) {
    arr[i] = arr[i - 1];
  }
  //set arr[index] = given value
  arr[index] = val;
  //return array
  return arr;
};
console.log(insertAt([100, 200, 5], 2, 311));

// REMOVE AT
const removeAt = (arr, index) => {
  // save the indexed value
  let removeVal = arr[index];
  //loop through array, values to the left
  for (let i = 0; i < arr.length; i++) {
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
