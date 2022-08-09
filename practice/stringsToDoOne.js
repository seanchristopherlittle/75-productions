//DEFENITELY HAD TO CODE ALONG W/ VIDEO FOR THIS ONE!

// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks.

// Examples:

// removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
// removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
const removeBlanks = (str) => {
  //make a new string
  let newStr = "";
  //loop through string provided
  for (let i = 0; i < str.length; i++) {
    //if current character is not a space
    if (str[i] != " ") {
      //concatonate w/ new string
      newStr += str[i];
    }
  }
  return newStr;
};
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

const removeBlanksAgain = (str) => {
  //make a new string
  let newStr = "";
  //loop through string provided
  //if current character is not a space
  for (let char in str)
    if (str[char] != " ") {
      //concatonate w/ new string
      newStr += str[char];
    }
  return newStr;
};
console.log(removeBlanksAgain(" Pl ayTha tF u nkyM usi c "));

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

// Examples:

// getDigits("abc8c0d1ngd0j0!8") => 801008

// getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
const getDigits = (str) => {
  //make new str
  let newStrNum = "";
  //for char in string
  for (let char in str) {
    //if char is digit
    if (!isNaN(str[char])) {
      //concatenate into new str
      newStrNum += str[char];
    }
  }
  //turn str into num
  //return new str(num)
  return Number(newStrNum);
};
console.log(getDigits("abc8c0d1ngd0j0!8"));

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

// acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW".

// acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
const acronym = (str) => {
  let wordsArr = str.split(" ");
  let acroStr = "";
  //loop through arr
  for (let word in wordsArr) {
    //grab first letter
    if (wordsArr[word].length > 0) {
      //change to upper case
      //concatenate letter into string
      acroStr += wordsArr[word][0].toUpperCase();
    }
  }
  //return acronym str
  return acroStr;
};
console.log(acronym(" there's no free lunch - gotta pay yer way. "));

// Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string.

// Examples:

// countNonSpaces("Honey pie, you are driving me crazy") => 29
// countNonSpaces("Hello world !") => 11
const countNonSpaces = (str) => {
  //init counter variable
  let counter = 0;
  //loop through str
  for (let char in str) {
    //if char is not str
    if (str[char] != " ") {
      //increment counter
      counter++;
    }
  }
  return counter;
  //return counter
};
console.log(countNonSpaces("Honey pie, you are driving me crazy"));

// Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

// Examples:

// removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
// removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
const removeShorterStrings = (arr, len) => {
  //init new arr
  let newStrLen = [];
  //init a next index var
  let nextIndex = 0;
  //loop through arr
  for (let val in arr) {
    //if val >= len
    if (arr[val].length >= len) {
      //add val to new arr
      newStrLen[nextIndex++] = arr[val];
    }
  }
  return newStrLen;
};
console.log(
  removeShorterStrings(
    ["Good morning", "sunshine", "the", "Earth", "says", "hello"],
    4
  )
);
