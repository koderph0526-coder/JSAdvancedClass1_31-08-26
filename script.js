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
