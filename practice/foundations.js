var message = "Hello World!!!";
console.log(message);

var numDays = 40;
console.log("It rained for " + numDays + " and nights!");

const sayMyName = () => {
  console.log("My name is Sean");
};
sayMyName();

// if (EXPRESSION) // EXPRESSION is evaluated upon reaching this line
// {
//     // body of 'IF': code runs only if EXPRESSION evaluates to true
// }
// else
// {
//     // body of 'ELSE': code runs only if EXPRESSION evaluates to false
// }
if (myName == "Sean") {
  console.log("Hey there Sean, how's it going?");
} else {
  console.log("Greetings Earthling. Have a great day!");
}

//AND operator = &&
if (today == "Friday" && moodLevel >= 100) {
  goDancing();
}

//OR operator = ||
if (raining == true || distanceMiles > 3) {
  callUber();
}

//NOT operator = !
if (!snowing) {
  bravelyDonSOmeShorts();
}

//Chaining IF stetement
if (myName == "Sean") {
  console.log("Hey there Sean, how's it going?");
} else if (myName == "Katie") {
  console.log("You look fabulous today!");
} else {
  console.log("Greetings Earthling. Have a great day!");
}

//Nesting IF statement
if (weather != "rainy") {
  if (distanceToStadium < 3) {
    console.log("I think I'll walk to the game.");
  } else {
    console.log("It's a bit far, so maybe I'll fly.");
  }
} else {
  console.log("Hey, I'm a duck! A little water is OK. I'll swim.");
}

//FOR LOOP: any initial setup, a test that must be true in order to stsart the loop, and any code to be run at the end of each time through the loop.
//for(INITIALIZATION; TEST; INCREMENT/DECREMENT)
{
  // BODY of the loop –
  // this runs repeatedly as long as TEST is true
}
for (var num = 1; num < 6; num = num + 1) {
  console.log("I'm counting!  The number is ", num);
}

//WHILE LOOP
var num = 1;
while (num < 6) {
  console.log("I'm counting! The number is " + num);
  num = num + 1;
}
console.log("We are done.  Goodbye World!");

var counter = 5;
counter = counter - 1; // counter now holds a value of 4
counter--; // counter is now 3
counter *= 6; // counter is 18
counter /= 2; // counter == 9

//BREAK...  Counts to for but will BREAK if num = 3
var num = 1;
while (num < 5) {
  if (num == 3) {
    break; // if you have code here, it will never run!
  }
  console.log("I'm counting! The number is ", num);
  num = num + 1; // if we break, these lines won't run
}
//I'm counting! The number is 1
//I'm counting! The number is 2

//CONTINUE...  Counts to 4 but will CONTINUE after num = 3
for (var num = 1; num < 5; num += 1) {
  if (num == 3) {
    continue; // if you have additional code down here, it will never run!
  }
  console.log("I'm counting! The number is ", num);
}
//I'm counting! The number is 1
//I'm counting! The number is 2
//I'm counting! The number is 4
