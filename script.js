// Function withCallName()
function Greet() {
  console.log("Hei hei");
  //This is called "callback", note that this function is called as aparameter in call of Greeting below, without the ()!
  Goodbye();
}

function Goodbye() {
  console.log("Hade!");
}

//Calling the function
Greet(Goodbye);

// This way of doing callback ensures that the code runs exactly the way you want, down to the nanosecond.
