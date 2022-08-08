var myNumber = 42;
var myName = "Sean";
const swap = () => {
  myNumber = myName;
  console.log(myNumber);
};
swap();

for (var num = -52; num < 1067; num += 1) {
  console.log(num);
}

const beCheerful = () => {
  for (var num = 1; num < 99; num += 1) {
    console.log("good morning!");
  }
};
beCheerful();

const byThree = () => {
  for (var num = -300; num < 1; num += 3) {
    if (num == -3) {
      continue;
    } else if (num == -6) {
      continue;
    }
    console.log(num);
  }
};
byThree();

const printInt = () => {
  var num = 2000;
  while (num < 5281) {
    console.log(num);
    num = num + 1;
  }
};
printInt();

//You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...."

const leapYear = (year) => {
  if (year % 4 == 0) {
    if (year % 400 == 0) {
      console.log(year + " is a LEAP YEAR!");
    } else if (year % 100 == 0) {
      console.log(year + " is not a leap year...");
    }
  } else {
    console.log(year + " is not a leap year...");
  }
};
leapYear(1600);
leapYear(0);
leapYear(1700);

const printCount = () => {
  for (var num = 512; num < 4097; num += 1) {
    if (num % 5 == 0) {
      console.log(num);
    }
  }
  console.log();
};
