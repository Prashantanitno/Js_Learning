// function in Javascript

//  what are first class functions? 

//  when a function threated like a variable and can pass to another function this can do what a variable can do 
function square(num){
    return num*num;
}

function displaySquare(fn){
    console.log("square is "+fn(5));
}

displaySquare(square);

// ----------> What is IIFE  <---------------
// Immediate invoke function expressions 