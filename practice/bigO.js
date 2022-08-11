// what is an algorithm
// -a process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.

// Big O notation
// -Big O notation helps us represent the change in time an algorithm takes to complete as the data size grows.

// Constant Time O(1)
// Time is bound by a value that does not depend on the size of the input.
// Each time we call the algo, it always has the same number of processes.

getName = () => {
  return "Fred";
};
console.log(getName());

addNums = (numA, numB) => {
  let sum = numA + numB;
  return sum;
};
console.log(addNums(4, 5));

getNameCool = () => "Wilma";
console.log(getNameCool());

// Linear TIme 0(n)
// Time increases linearly w/ the size of teh input.
// Each time the algo is called, it has to iterate through the data set.
// 1 element = 1 second
// 1000 elements = 1000 seconds

findMin = (arr) => {
  let min = arr[0];
  for (let x = 0; x < arr.length; x++) if (arr[x] < min) min = arr[x];
  return min;
};
console.log(findMin([89, 743, 98, 20, 61, 30])); // O(n)

// Qudratic Time O(n^2)
// Quadratic Time Complexity represents an algorithm whose pperformance is directly proportional to the squared size of the input data set.
// Each time the algo is called, it has to iterate through the data 2 times.
// 1 elemant = 1*1 second
//1000 elemants = 1000*1000 seconds

sumAll = (arr) => {
  // adds each number to every other number and itself
  let sum = 0;
  for (let x = 0; x < arr.length; x++)
    for (let y = 0; y < arr.length; y++) sum += arr[x] + arr[y];
  return sum;
};
console.log(sumAll([89, 743, 98, 20, 61, 30])); // O(n^2)
