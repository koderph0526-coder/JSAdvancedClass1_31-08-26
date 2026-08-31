// Function withCallName()
function Greet() {
  console.log("Hei hei");
  //This is called "callback", note that this function is called as aparameter in call of Greeting below, without the ()!
  Goodbye();
  //This is how we chain reactions onto eachother to ensure that the code runs exactly how we want and it improves readability and it also improves the flow
}

function Goodbye() {
  console.log("Hade!");
}

//Calling the function
Greet(Goodbye);

// This way of doing callback ensures that the code runs exactly the way you want, down to the nanosecond.

//
//We have to types of functions calls, named and anonymous
// Named function call:
let tall = [1, 2, 3];
function double(tallPar) {
  return tallPar * 2;
}
const doubleArr = tall.map(double);
console.log(doubleArr);
//
// Anonymous function call:
const doubleArr2 = tall.map((m) => {
  //When we use a () within the map within the anonymous call it automatically reads as a functino
  return m * 2;
  //This code reads and runs excatly as the named one above it, but is shorter code and thereby easier to read.
});

// With arrow function we also have the option to write it like this:
const doubleArr3 = tall.map((m) => m * 2);
//Meaning with the arrow function in an anonymous(and possibly named too?) function we don't actually have to use the {}, we can just write it within the ()

// Arrow functions:
const arrowFunction = () => {}; // The arrow function is now made as a variable
// Please note that this one still accepts a parameter and/or argument in the ()

// high order Methods, one of them being .map!
const arrayUnmapped [2, 5, 4, 64, 13]
// a high order method is a way of coding that allows us to use/run functions as the paramaters!
arrayUnmapped.map((a) => {}) //This runs the first number in the array, renaming it to be "a"
const arraytwo = arrayUnmapped.map((a) => a + 1) //Here we are storing the function in a new array, while renaming it
//"The great thing about .map is that it returns a new array, it reads the code and then runs it as a new array."
arrayUnmapped.forEach((a) => {console.log(a)})
//It's almost like writing a for loop, while running an index through it. Sad thing about forEach is that it doesn't run/save it as a new array


