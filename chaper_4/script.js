//methods & function
console.log("hello world");

greet();
//see, this wouldn't work. Speak isn't defined yet
//speak();

//function declaration
//THis uses HOISTING to make this availalbe anywhere (not just afterwards)
function greet() {
  console.log("hello there");
}

//function expression
//this will be available to anything AFTERWARDS
const speak = function() {
  console.log("Good day!");
};

greet();
speak();
