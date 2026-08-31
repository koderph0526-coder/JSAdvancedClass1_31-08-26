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
const arrayUnmapped = [2, 5, 4, 64, 13];
// a high order method is a way of coding that allows us to use/run functions as the paramaters!
arrayUnmapped.map((a) => {}); //This runs the first number in the array, renaming it to be "a"
const arraytwo = arrayUnmapped.map((a) => a + 1); //Here we are storing the function in a new array, while renaming it
//"The great thing about .map is that it returns a new array, it reads the code and then runs it as a new array."
arrayUnmapped.forEach((a) => {
  console.log(a * 2);
});
//It's almost like writing a for loop, while running an index through it. Sad thing about forEach is that it doesn't run/save it as a new array

//SideNote: Will be using .map ALOT when working in react, so it's benefit to learn and understand this method

// --- A lot of the code we are being thaught today is code we are actually already familiar with, but written in a simnpler, more impoved manner that is often shorter and more precise.
//The forEach behind the scenes:
for (let i = 0; i < arrayUnmapped.length; i++) {
  console.log(arrayUnmapped[i] * 2);
  // NS! This code runs excactly the same as the forEach on line 47!
}

//
//This .filter() Method:

const products = [
  { name: "Laptop", price: 1200, inStock: true },
  { name: "Mouse", price: 350, inStock: true },
  { name: "Keyboard", price: 850, inStock: false },
  { name: "Screen", price: 3500, inStock: true },
];

//This filter and checks which items that have been stated as true = in stock
const inStock = products.filter((item) => item.inStock);
console.log(inStock);

//This filter checks and "prints" only the items which price is lower than 1000.
const cheapPrices = products.filter((item) => item.price < 1000);
console.log(cheapPrices);

// .sort -> NS! This method needs destructuring to work
const priceLowToHigh = [...products].sort((a, b) => a.price - b.price);
console.log(priceLowToHigh); //This way it sort everything from the array that contains "price" from low to high
/// -> It ensured that the array keeps in tact, meaning that we don't alter the original but use it as a base to calculate and it prints a copy with the result of the given parameters
const priceHightToLow = [...products].sort((a, b) => b.price - a.price); //This sort the array of prices from hight to low?
console.log(priceHightToLow);

// sum -  used such as below; calculates the total value, NOTE: it needs to be the first parameter that's given in the function
const totalPrice = products.reduce((sum, item) => {
  return sum + item.price;
}, 0); // The 0 is sent straigh back into reduce, as to tell it what it needs to start at? - Or to give it the "You are a number and you start at 0, btw" message. It is seens as an initializer value.
//This logs the totalt value from all of the items to console
console.log(totalPrice);

//Sidenotes/recap of old lessons:
const tall2 = 2; // daclered with a initialized value
tall2 = 1; // reassigning the value, ?note? can also only be done on a let? It for now gives an error in the console.
let tall3; //Just declaring a variable, this one is empty, NOTE: only let can be stated as a simple declaration without an assigned value
