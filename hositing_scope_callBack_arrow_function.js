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
    // console.log("x", x);
    // console.log("y", y);
  })(2);
})(1);


// first search the x in the return scope and then search for the x in the parent scope i.e whole funciton 






// --------------->  What is Function Scope <------------------


//----->   question on function scope <-----------

// as let creats a block scope for this 

// -----> For Var <------- 
// for(var i=0; i<5; i++){
//     setTimeout(() => {
//         console.log(i)
//     }, i*1000);
// }




// -->  function Hoisting 


// ---->  Question on hoisting <-------

var x =21; 
var fun = function(){
    console.log("x-> ",x)
    // var x=20;
}
fun();

// Ans: undefinded because ->  first it is intialized the global scope then 
// go to the local scope as  x has the value of 21 if inside var is not pressent  
// because of the lcoal scope it is not been intailized so teh value is undefined
