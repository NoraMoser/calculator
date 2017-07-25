let input1 = document.getElementById("numberOne");
let input2 = document.getElementById("numberTwo");
let output = 0;

document.getElementById("multiplyNumbers").addEventListener("click", function(){
  multiply();
    document.getElementById("output").innerHTML = output;
    // document.getElementById("convertedTemp").innerHTML = celColor;
});

document.getElementById("divideNumbers").addEventListener("click", function(){
  divide();
    document.getElementById("output").innerHTML = output;
    // document.getElementById("convertedTemp").innerHTML = celColor;
});

document.getElementById("addNumbers").addEventListener("click", function(){
  add();
    document.getElementById("output").innerHTML = output;
    // document.getElementById("convertedTemp").innerHTML = celColor;
});

document.getElementById("subtractNumbers").addEventListener("click", function(){
  subtract();
    document.getElementById("output").innerHTML = output;
    // document.getElementById("convertedTemp").innerHTML = celColor;
});

function multiply() {
  output = input1.value * input2.value;
}

function divide() {
  output = input1.value / input2.value;
}

function add() {
  output = parseInt(input1.value) + parseInt(input2.value);
}

function subtract() {
  output = input1.value - input2.value;
}
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */