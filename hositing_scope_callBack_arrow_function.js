// function in Javascript

//  what are first class functions?

//  when a function threated like a variable and can pass to another function this can do what a variable can do
function square(num) {
  return num * num;
}

function displaySquare(fn) {
  console.log("square is " + fn(5));
}

// displaySquare(square);

// ----------> What is IIFE  <---------------
// Immediate invoke function expressions

(function square(num) {
  //   console.log(num * num);
})(5);

// Question on IIFE

(function (x) {
  return (function (y) {
    console.log("x", x);
    console.log("y", y);
  })(2);
})(1);


// first search the x in the return scope and then search for the x in the parent scope i.e whole funciton 